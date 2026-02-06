import { test,expect,defineConfig } from '@playwright/test';
import fs from 'fs';

test('Complete booking flow with screenshots', async ({ page }) => {

  //  Ensure screenshots folder exists
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  //  Open URL
  await page.goto(
    'https://inline.app/booking/-Lamo24uNMzLIlnCEhIJ:inline-live-2a466/-Lamo28zt1ere32YxWMR?language=en'
  );

  // click on complete booking button
  await page.evaluate(
    "document.querySelector('span.sc-crXcEl.kVDPfe')?.click()"
  );

  // Select 3 Adults
  const adultPicker = page.locator('#adult-picker');
  await adultPicker.selectOption({ index: 3 });

  // 📸 Element screenshot – Adult picker
  await adultPicker.screenshot({
    path: 'screenshots/adult-picker.png'
  });

  // Select date 
  await page.locator('#date-picker').click();
  await page.locator("//span[text()='11']").first().click();

  const timeSlot = page.locator(
    '//button[@data-cy="book-now-time-slot-box-12-00"]'
  );
  await timeSlot.click();

  await page.waitForTimeout(2000);

  // 📸 Element screenshot – Time slot
  await timeSlot.screenshot({
    path: 'screenshots/time-slot.png'
  });

  // 📸 Full page screenshot
  await page.screenshot({
    path: 'screenshots/full-page.png',
    fullPage: true
  });
});
