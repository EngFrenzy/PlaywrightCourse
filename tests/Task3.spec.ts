import { test, expect, type Locator } from '@playwright/test';
import { text } from 'stream/consumers';
import { LoginPage } from '../Pages/LoginPage.js';
import  HomePage from '../Pages/HomePage.js';

test('Click actions - Locators and Assertions', async ({ page }) => {

  let loginPage = new LoginPage(page);
  let homePage = new HomePage(page);
  // Locators variables

  const nebulaTitle: Locator = page.locator('[class="mb-1 text-center text-2xl font-semibold"]');
  const showPasswordBtn: Locator = page.locator('[id="btn-toggle-password"]');
  const doubleclickbtn: Locator = page.locator('[id="btn-double"]');
  const nebulaLoginPageTitle: string = 'Nebula TestLab – Test Automation Practice';
  const javaCheckBox: Locator = page.locator('[id="chk-java"]');
  const midRadioBtn: Locator = page.locator('[id="rdo-mid"]');
  const dropdownSectionBtn: Locator = page.locator('[id="link-9"]');
  const dropdownSelectOption: Locator = page.locator('[id="single-select"]');
  const MultiSelectOption: Locator = page.locator('[id="multi-select"]');
  const alertSectionBtn: Locator = page.locator('[id="link-12"]');
  const alertBtn: Locator = page.locator('[id="btn-alert"]');
  const confirmationAlertBtn: Locator = page.locator('[id="btn-confirm"]');
  const confirmationOutput: Locator = page.locator('[id="confirm-out"]');
  const alertPromptOutput: Locator = page.locator('[id="prompt-out"]');
  let alertprompt = "Ahmed";
  const alertBtnPrompt: Locator = page.locator('[id="btn-prompt"]');
  const dragDropSectionBtn: Locator = page.locator('[id="link-5"]');
  const itemBDragable: Locator = page.locator('[id="draggable-Item-B"]');
  const rightDropBox: Locator = page.locator('[id="drop-right"]');


  // Test Case Steps 
  await page.goto('https://nebula-test-lab-lv1.vercel.app/');
  await page.waitForTimeout(2000);
  await expect(page).toHaveTitle(nebulaLoginPageTitle);
  await expect(page).toHaveURL('https://nebula-test-lab-lv1.vercel.app/');
  await expect(nebulaTitle).toHaveText('Nebula TestLab');
  await expect(showPasswordBtn).toHaveScreenshot();
  // await expect(loginPage.loginBtn).toBeVisible();
  await loginPage.enterUsername('trainer');
  await loginPage.enterPassword('selenium123');
  await loginPage.clickOnLoginBtn();
  // await doubleclickbtn.dblclick();
  await homePage.doubleClickonDoubleClickBtn();
  // await checkElement(javaCheckBox);
  await homePage.javaCheckBtn();
  await homePage.javaUncheckBtn();
  await homePage.checkMidLevelRadioBtn();


  // await checkElement(midRadioBtn);
  // await expect(midRadioBtn).toBeChecked();
  // await clickOnElement(dropdownSectionBtn);
  await homePage.clickDropdownSectionBtn();
  await dropdownSelectOption.selectOption('chrome');
  await MultiSelectOption.selectOption(['API', 'UI']);
  // await clickOnElement(alertSectionBtn);
  await homePage.clickAlertSectionBtn();
  page.once('dialog', async (alert) => {
    expect(alert.message()).toEqual('Simple alert');
    await page.waitForTimeout(1000);
    await alert.accept();

  });
  // await clickOnElement(alertBtn);
  await homePage.clickOnAlertBtn();

  // await clickOnElement(confirmationAlertBtn);
  await homePage.clickOnConfirmationAlertBtn();
  page.once('dialog', async (alert) => {
    expect(alert.message()).toEqual('Are you sure?');
    await page.waitForTimeout(1000);
    await alert.dismiss();
  });

  // await clickOnElement(confirmationAlertBtn);
  await homePage.clickOnConfirmationAlertBtn();

  await expect(confirmationOutput).toHaveText('Cancel');


  page.once('dialog', async (alert) => {
    expect(alert.message()).toEqual('Type anything:');
    await page.waitForTimeout(1000);
    await alert.accept(alertprompt);
  });

  // await clickOnElement(alertBtnPrompt);
  await homePage.clickOnAlertBtnPrompt();
  await expect(alertPromptOutput).toHaveText(alertprompt);

  // await clickOnElement(dragDropSectionBtn);
  await homePage.dragItemBToRightBox();
  await itemBDragable.hover();
  await page.mouse.down();
  await rightDropBox.hover();
  await page.mouse.up();

  //Functions Section

  async function enterTextToElement(elementlocator: Locator, textToSend: string) {
    await expect(elementlocator).toBeVisible();
    await elementlocator.clear();
    await elementlocator.fill(textToSend);
  }

  async function checkElement(elementcheck: Locator) {
    await expect(elementcheck).toBeVisible();
    await elementcheck.check();
    expect(elementcheck).toBeChecked();

  }
  async function clickOnElement(elementlocator: Locator) {
    await elementlocator.click();
  }
});


//This Task is not completed yet video 1:33:00 this will be contained later today