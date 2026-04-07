import { test, expect } from '@playwright/test';

test('active chapters appear as cards', async ({ page }) => {
  await page.goto('/kapitel');
  const cards = page.locator('[data-beduerfnis]');
  await expect(cards).toHaveCount(2); // ch01 and ch02 are active
});

test('inactive chapter (ch03) does not appear as a card', async ({ page }) => {
  await page.goto('/kapitel');
  const cards = page.locator('[data-beduerfnis]');
  const slugs = await cards.evaluateAll((els) =>
    els.map((el) => (el as HTMLAnchorElement).href)
  );
  expect(slugs.some((href) => href.includes('/kapitel/03'))).toBe(false);
});

test('filter by beduerfnis hides non-matching cards', async ({ page }) => {
  await page.goto('/kapitel');
  await page.click('[data-filter-value="runterkommen"]');
  const visible = page.locator('[data-beduerfnis]:not([hidden])');
  await expect(visible).toHaveCount(1);
  await expect(visible.first()).toHaveAttribute('data-beduerfnis', 'runterkommen');
});

test('filter by dauer hides non-matching cards', async ({ page }) => {
  await page.goto('/kapitel');
  await page.click('[data-filter-value="2min"]');
  const visible = page.locator('[data-beduerfnis]:not([hidden])');
  await expect(visible).toHaveCount(1);
  await expect(visible.first()).toHaveAttribute('data-dauer', '2min');
});

test('combined filter works', async ({ page }) => {
  await page.goto('/kapitel');
  await page.click('[data-filter-value="stabilisieren"]');
  await page.click('[data-filter-value="2min"]');
  const visible = page.locator('[data-beduerfnis]:not([hidden])');
  await expect(visible).toHaveCount(1);
  await expect(visible.first()).toHaveAttribute('data-beduerfnis', 'stabilisieren');
});

test('combined filter with no match shows empty hint', async ({ page }) => {
  await page.goto('/kapitel');
  await page.click('[data-filter-value="runterkommen"]');
  await page.click('[data-filter-value="2min"]'); // ch01 is 5min, not 2min
  const emptyHint = page.locator('#empty-hint');
  await expect(emptyHint).not.toHaveAttribute('hidden');
});

test('clicking active filter again clears it', async ({ page }) => {
  await page.goto('/kapitel');
  await page.click('[data-filter-value="runterkommen"]');
  await page.click('[data-filter-value="runterkommen"]'); // toggle off
  const visible = page.locator('[data-beduerfnis]:not([hidden])');
  await expect(visible).toHaveCount(2);
});

test('safety link is present on overview page', async ({ page }) => {
  await page.goto('/kapitel');
  await expect(page.locator('a[href="/sicherheit"]')).toBeVisible();
});
