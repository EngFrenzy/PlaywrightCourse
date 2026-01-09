import { type Locator } from '@playwright/test';
import BasePage from './BasePage.js';

export class LoginPage extends BasePage {


    
    private readonly usernameField: Locator =  this.page.locator('[id="username-input"]');
    private readonly passwordField: Locator =  this.page.locator('[id="password-input"]');
    private readonly loginBtn: Locator = this.page.locator('[id="btn-login"]')


async enterUsername(username: string) {
    await this.enterTextToElement(this.usernameField, username);
}
async enterPassword(password: string) {
    await this.enterTextToElement(this.passwordField, password);
}
async clickOnLoginBtn() {
    await this.clickOnElement(this.loginBtn);
}




}