
import { test, expect, type Locator, type Page } from '@playwright/test';
import Actions  from '../utilities/Actions.js';
export default class BasePage {
protected page: Page;
public readonly actions:Actions;


    constructor(page: Page) {
        this.page = page;
        this.actions = new Actions(this.page);
    }

 }