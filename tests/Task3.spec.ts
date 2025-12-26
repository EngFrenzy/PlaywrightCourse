import { test, expect, type Locator } from '@playwright/test';

test('Click actions - Locators and Assertions', async ({ page }) => {
  // Locators variables (CSS and XPath)
  const usernameField: Locator = page.locator('[id="username-input"]');
  const passwordField: Locator = page.locator('[id="password-input"]');
  const loginBtn: Locator = page.locator('[id="btn-login"]');
  const nebulaTitle: Locator = page.locator('[class="mb-1 text-center text-2xl font-semibold"]');
  const showPasswordBtn: Locator = page.locator('[id="btn-toggle-password"]');
  const doubleclickbtn: Locator = page.locator('[id="btn-double"]');
  const nebulaLoginPageTitle: string = 'Nebula TestLab | Test Automation Practice';

  // Navigate to the app
  await page.goto('https://nebula-test-lab-lv1.vercel.app/');
  await page.waitForTimeout(2000);

  // Assertions about the page and title
  await expect(page).toHaveTitle(nebulaLoginPageTitle);
  await expect(page).toHaveURL('https://nebula-test-lab-lv1.vercel.app/');
  await expect(nebulaTitle).toHaveText('Nebula TestLab');
  await expect(showPasswordBtn).toHaveScreenshot();

  // Small helper utilities used in the original snippet
  const enterTextToElement = async (el: Locator, text: string) => { await el.fill(text); };
  const clickOnElement = async (el: Locator) => { await el.click(); };

  // Use helpers to perform login
  await enterTextToElement(usernameField, 'trainer');
  await passwordField.pressSequentially('selenium123', { delay: 300 });
  await expect(loginBtn).toHaveCSS('font-weight', '500');
  await clickOnElement(loginBtn);
  await page.waitForTimeout(1500);

  // Final smoke assertion
  await expect(usernameField).toBeVisible();
});


//paused after double Click action decleration , video at 2:05:52
//This Task Will be containued Later, as it needs more time to be completed while this week i have no enough time