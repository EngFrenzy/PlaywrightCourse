import type {Locator} from '@playwright/test';
import BasePage from './BasePage.js';
export default class HomePage extends BasePage {

    private readonly nebulaTitle: Locator = this.page.locator('[class="mb-1 text-center text-2xl font-semibold"]');
    private readonly showPasswordBtn: Locator = this.page.locator('[id="btn-toggle-password"]');
    private readonly doubleclickbtn: Locator = this.page.locator('[id="btn-double"]');
    private readonly nebulaLoginPageTitle: string = 'Nebula TestLab – Test Automation Practice';
    private readonly javaCheckBox: Locator = this.page.locator('[id="chk-java"]');
    private readonly midRadioBtn: Locator = this.page.locator('[id="rdo-mid"]');
    private readonly dropdownSectionBtn: Locator = this.page.locator('[id="link-9"]');
    private readonly dropdownSelectOption: Locator = this.page.locator('[id="single-select"]');
    private readonly MultiSelectOption: Locator = this.page.locator('[id="multi-select"]');
    private readonly alertSectionBtn: Locator = this.page.locator('[id="link-12"]');
    private readonly alertBtn: Locator = this.page.locator('[id="btn-alert"]');
    private readonly confirmationAlertBtn: Locator = this.page.locator('[id="btn-confirm"]');
    private readonly confirmationOutput: Locator = this.page.locator('[id="confirm-out"]');
    private readonly alertPromptOutput: Locator = this.page.locator('[id="prompt-out"]');
    private readonly alertprompt = "Ahmed";
    private readonly alertBtnPrompt: Locator = this.page.locator('[id="btn-prompt"]');
    private readonly dragDropSectionBtn: Locator = this.page.locator('[id="link-5"]');
    private readonly itemBDragable: Locator = this.page.locator('[id="draggable-Item-B"]');
    private readonly rightDropBox: Locator = this.page.locator('[id="drop-right"]');
    
    async doubleClickonDoubleClickBtn() {
            await this.doubleClickOnElement(this.doubleclickbtn)}

    
async javaCheckBtn(){
    await this.checkElement(this.javaCheckBox);
}
async javaUncheckBtn(){
    await this.uncheckElement(this.javaCheckBox);
}
   async checkMidLevelRadioBtn(){
    await this.checkElement(this.midRadioBtn);
   }
   async clickDropdownSectionBtn(){
    await this.clickOnElement(this.dropdownSectionBtn);
   }
   async clickAlertSectionBtn(){
    await this.clickOnElement(this.alertSectionBtn);
   }
   async clickOnAlertBtn(){
    await this.clickOnElement(this.alertBtn);
}
async clickOnConfirmationAlertBtn(){
    await this.clickOnElement(this.confirmationAlertBtn);
}
async clickOnAlertBtnPrompt(){
    await this.clickOnElement(this.alertBtnPrompt);
}
async dragItemBToRightBox(){
    await this.itemBDragable.dragTo(this.rightDropBox);
}




}
