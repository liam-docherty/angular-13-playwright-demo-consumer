import { test, expect } from '@playwright/test';
import { title } from '../../src/constants';

test('example', async ({ page }) => {
  await page.goto('');
  expect(await page.locator('#welcome').innerText()).toBe(title);
});
