import { test, expect } from '@playwright/test';

test('page loads with correct title and form', async ({ page }) => {
  await page.goto('/empfehlung');
  await expect(page).toHaveTitle(/Welche Übung passt zu dir/);
  await expect(page.locator('textarea')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();
  await expect(page.locator('.datenschutz')).toBeVisible();
});

test('shows recommendation after successful API response', async ({ page }) => {
  await page.route('/api/empfehlung', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        empfehlung:
          'Für dich passt gerade die Vagusatmung aus Kapitel 5. Es ist eine Audioübung (13 Min.). Nimm dir einen ruhigen Moment.',
      }),
    })
  );

  await page.goto('/empfehlung');
  await page.fill('textarea', 'Ich bin total gestresst und komme nicht runter.');
  await page.click('button[type="submit"]');

  const result = page.locator('#empfehlung-text');
  await expect(result).toBeVisible();
  await expect(result).toContainText('Vagusatmung');
});

test('shows error message when API returns an error', async ({ page }) => {
  await page.route('/api/empfehlung', (route) =>
    route.fulfill({
      status: 502,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Fehler beim KI-Dienst.' }),
    })
  );

  await page.goto('/empfehlung');
  await page.fill('textarea', 'Ich fühle mich leer.');
  await page.click('button[type="submit"]');

  await expect(page.locator('#error-text')).toBeVisible();
  await expect(page.locator('#error-text')).toContainText('Fehler beim KI-Dienst.');
});

test('shows loading state while waiting for response', async ({ page }) => {
  let resolveRoute: (value: unknown) => void;
  const routeBlocked = new Promise((resolve) => { resolveRoute = resolve; });

  await page.route('/api/empfehlung', async (route) => {
    await routeBlocked;
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ empfehlung: 'Test-Empfehlung.' }),
    });
  });

  await page.goto('/empfehlung');
  await page.fill('textarea', 'Ich bin müde.');
  await page.click('button[type="submit"]');

  await expect(page.locator('#loading-text')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeDisabled();

  resolveRoute!(undefined);
  await expect(page.locator('#loading-text')).toBeHidden();
});

test('back link navigates to home', async ({ page }) => {
  await page.goto('/empfehlung');
  await page.click('.back-link');
  await expect(page).toHaveURL('/');
});
