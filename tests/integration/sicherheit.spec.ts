import { test, expect } from '@playwright/test';

test('sicherheit page renders with content', async ({ page }) => {
  await page.goto('/sicherheit');
  await expect(page.locator('h1')).toBeVisible();
});

test('sicherheit page has a link back to /kapitel', async ({ page }) => {
  await page.goto('/sicherheit');
  await expect(page.locator('a[href="/kapitel"]')).toBeVisible();
});

test('sicherheit page has safety link (footer)', async ({ page }) => {
  await page.goto('/sicherheit');
  await expect(page.locator('a[href="/sicherheit"]')).toBeVisible();
});
