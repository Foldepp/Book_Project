import { test, expect } from '@playwright/test';

test('ch01 renders chapter title', async ({ page }) => {
  await page.goto('/kapitel/01');
  await expect(page.locator('h1')).toContainText('Ankommen im Atem');
});

test('ch01 shows audio player when audioUrl is set', async ({ page }) => {
  await page.goto('/kapitel/01');
  await expect(page.locator('audio')).toBeVisible();
});

test('ch03 shows placeholder instead of audio player when audioUrl is empty', async ({ page }) => {
  await page.goto('/kapitel/03');
  await expect(page.locator('audio')).toHaveCount(0);
  await expect(page.locator('.audio-placeholder')).toBeVisible();
});

test('textalternative is accessible via details element', async ({ page }) => {
  await page.goto('/kapitel/01');
  const details = page.locator('details');
  await expect(details).toBeVisible();
  await details.click(); // open the details
  await expect(page.locator('.text-content')).toBeVisible();
});

test('safety link is present on detail page', async ({ page }) => {
  await page.goto('/kapitel/01');
  await expect(page.locator('a[href="/sicherheit"]')).toBeVisible();
});

test('ch03 URL resolves even though aktiv is false', async ({ page }) => {
  const response = await page.goto('/kapitel/03');
  expect(response?.status()).toBe(200);
});

test('ch02 renders chapter title', async ({ page }) => {
  await page.goto('/kapitel/02');
  await expect(page.locator('h1')).toContainText('Der sichere Ort');
});
