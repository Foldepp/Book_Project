import { test, expect } from '@playwright/test';

test('page title is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Du bist genug/);
});

test('exactly 3 entry buttons are visible', async ({ page }) => {
  await page.goto('/');
  const buttons = page.locator('.entry-btn');
  await expect(buttons).toHaveCount(3);
});

test('entry buttons link to correct pages', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.entry-btn[href="/kapitel"]')).toHaveCount(2);
  await expect(page.locator('.entry-btn[href="/empfehlung"]')).toHaveCount(1);
});

test('safety link is present', async ({ page }) => {
  await page.goto('/');
  const safetyLink = page.locator('a[href="/sicherheit"]');
  await expect(safetyLink).toBeVisible();
});
