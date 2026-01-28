import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('img').nth(4).click();
  await page.getByText('Elements').click();
  await page.getByText('Radio Button').click();
  await page.getByText('Impressive').click();
  await page.getByRole('listitem').filter({ hasText: /^Links$/ }).click();
  await page.getByRole('link', { name: 'Created' }).click();
  await page.getByRole('link', { name: 'No Content' }).click();
  await page.getByText('Upload and Download').click();
  await page.getByText('Buttons').click();
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();
  await page.getByText('Dynamic Properties').click();
  await page.getByRole('button', { name: 'Color Change' }).click();
  await page.locator('div:nth-child(2) > .group-header > .header-wrapper').click();
  await page.getByText('Interactions').click();
  await page.getByText('Sortable').click();
  await page.getByRole('tab', { name: 'Grid' }).click();
});