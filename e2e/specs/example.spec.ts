import { test, expect } from '@playwright/test';
// TODO: THIS CAUSES THE ISSUE EVEN IF NOT USED
import { DecimalPipe } from '@angular/common';
import { title } from '../../src/constants';

test('example', async ({ page }) => {
  await page.goto('');
  // const aaa = `${new DecimalPipe('en-gb').transform(1)}`;
  expect(await page.locator('#welcome').innerText()).toBe(title);
});
