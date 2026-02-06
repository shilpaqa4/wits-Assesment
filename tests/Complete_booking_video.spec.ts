import { test, expect,defineConfig } from '@playwright/test';
test.use({ video: 'on' });

test('Complete booking flow with video', async ({ page }) => {

  // Goto URL
  await page.goto('https://inline.app/booking/-Lamo24uNMzLIlnCEhIJ:inline-live-2a466/-Lamo28zt1ere32YxWMR?language=en');
// click complete booking button
  page.evaluate("document.querySelector('span.sc-crXcEl.kVDPfe').click()");
    await page.waitForTimeout(2000);
  // 1️⃣ Select 3 Adults
  await page.locator('#adult-picker').selectOption({index :3});
  await page.waitForTimeout(2000);
  //select date Feb 11 
  await page.locator('#date-picker').click();
  await page.locator("//span[text()='11']").first().click();
  await page.waitForTimeout(2000);
  //select time 12:00
  await page.locator('//button[@data-cy="book-now-time-slot-box-12-00"]').click();
  await page.waitForTimeout(2000);
// again click complete booking Button
   page.evaluate("document.querySelector('span.sc-crXcEl.kVDPfe').click()");
   await page.waitForTimeout(2000);
});
