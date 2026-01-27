import { test, expect } from '@playwright/test';

test('Search for Books on Amazon AU and click second option', async ({ page }) => {
  // Navigate to Amazon Australia
  await page.goto('https://www.amazon.com.au');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Find and fill the search bar
  const searchInput = page.locator('input[placeholder="Search Amazon"]');
  await searchInput.fill('Books');
  
  // Wait for search suggestions to appear
  await page.waitForTimeout(1000);
  
  // Click on the second option from the dropdown
  const secondOption = page.locator('div[data-component-type="s-suggestion"]').nth(1);
  await secondOption.click();
  
  // Verify we're on the search results page
  await expect(page).toHaveURL(/.*amazon\.com\.au.*books/i);
});
