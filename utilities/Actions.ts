import { test, expect, type Locator } from '@playwright/test';

export default class Actions {
       
protected async enterTextToElement(elementlocator:Locator, textToSend:string)
{
  await expect(elementlocator).toBeVisible();
  await elementlocator.clear();
  await elementlocator.fill(textToSend);
} 

protected async checkElement(elementcheck:Locator){
  await expect(elementcheck).toBeVisible();
  await elementcheck.check();
  expect(elementcheck).toBeChecked();

}
protected async clickOnElement(elementlocator:Locator){
  await elementlocator.click();
}

protected async doubleClickOnElement(elementlocator:Locator){
  await elementlocator.dblclick();
}


protected async uncheckElement(elementcheck:Locator){
  await expect(elementcheck).toBeVisible();
  await elementcheck.uncheck();
  expect(elementcheck).not.toBeChecked();

}

}