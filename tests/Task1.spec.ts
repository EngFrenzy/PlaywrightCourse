import { test, expect } from '@playwright/test';

test('Verify Login Succefully', async ({ page }) => {
  await page.goto('https://nebula-test-lab-lv1.vercel.app/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('trainer');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password 👁️' }).fill('selenium123');
  await page.getByRole('textbox', { name: 'Password 👁️' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#controls')).toContainText('Global Controls');
});

test('Verify Logout Functionality', async ({ page }) => {
  await page.goto('https://nebula-test-lab-lv1.vercel.app/');
  await expect(page.getByText('Please login to start')).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('trainer');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password 👁️' }).fill('selenium123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Global Controls' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  await page.getByRole('button', { name: 'Logout' }).click();
});

test('Verify QA Lead is in the Table', async ({ page }) => {
  await page.goto('https://nebula-test-lab-lv1.vercel.app/');
  await expect(page.getByRole('paragraph')).toContainText('Please login to start practicing automation scenarios');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('trainer');
  await page.getByRole('textbox', { name: 'Password 👁️' }).click();
  await page.getByRole('textbox', { name: 'Password 👁️' }).fill('selenium123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#toc-title')).toContainText('Practice Menu');
  await page.getByRole('link', { name: '04 Show Table Sorting & table' }).click();
  await expect(page.locator('#btn-sort')).toContainText('Sort by Years ▲');
  await expect(page.getByLabel(') Show Table').locator('tbody')).toContainText('QA Lead');
});

test('Verify Search Functionality with Snapshot method', async ({ page }) => {
  await page.goto('https://nebula-test-lab-lv1.vercel.app/');
  await expect(page.getByRole('paragraph')).toContainText('Please login to start practicing automation scenarios');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('trainer');
  await page.getByRole('textbox', { name: 'Password 👁️' }).click();
  await page.getByRole('textbox', { name: 'Password 👁️' }).fill('selenium123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#search-training-title')).toContainText('20) Search & Pagination Training');
  await expect(page.locator('label').filter({ hasText: /^Status$/ })).toBeVisible();
  await expect(page.getByLabel('Status', { exact: true })).toBeVisible();
  await page.getByLabel('Status', { exact: true }).selectOption('Open');
  await page.getByLabel('Environment').selectOption('UAT');
  await expect(page.getByLabel(') Search & Pagination Training')).toMatchAriaSnapshot(`
    - region /\\d+\\) Search & Pagination Training/:
      - heading /\\d+\\) Search & Pagination Training/ [level=3]
      - paragraph: /Use this section to practice searching, filtering and paginating a table \\(\\d+ rows per page\\)\\. Perfect for Selenium test cases\\./
      - text: ""
      - textbox "Search by ID, title or area":
        - /placeholder: e.g. login, 5, dashboard...
      - text: ""
      - combobox "Status":
        - option "All"
        - option "Open" [selected]
        - option "In Progress"
        - option "Blocked"
        - option "Resolved"
        - option "Closed"
      - text: ""
      - combobox "Environment":
        - option "All"
        - option "DEV"
        - option "STG"
        - option "UAT" [selected]
        - option "PROD"
      - paragraph:
        - text: Found
        - strong: "6"
        - text: result(s). Showing
        - strong: "6"
        - text: on this page (page
        - strong: "1"
        - text: of
        - strong: "1"
        - text: ).
      - table:
        - rowgroup:
          - row "ID Title Status Environment Area":
            - columnheader "ID"
            - columnheader "Title"
            - columnheader "Status"
            - columnheader "Environment"
            - columnheader "Area"
        - rowgroup:
          - 'row /\\d+ Test case #\\d+ for Dashboard Open UAT Dashboard/':
            - cell /\\d+/
            - 'cell /Test case #\\d+ for Dashboard/'
            - cell "Open"
            - cell "UAT"
            - cell "Dashboard"
          - 'row /\\d+ Test case #\\d+ for Profile Open UAT Profile/':
            - cell /\\d+/
            - 'cell /Test case #\\d+ for Profile/'
            - cell "Open"
            - cell "UAT"
            - cell "Profile"
          - 'row /\\d+ Test case #\\d+ for Checkout Open UAT Checkout/':
            - cell /\\d+/
            - 'cell /Test case #\\d+ for Checkout/'
            - cell "Open"
            - cell "UAT"
            - cell "Checkout"
          - 'row /\\d+ Test case #\\d+ for Login Open UAT Login/':
            - cell /\\d+/
            - 'cell /Test case #\\d+ for Login/'
            - cell "Open"
            - cell "UAT"
            - cell "Login"
          - 'row /\\d+ Test case #\\d+ for Reporting Open UAT Reporting/':
            - cell /\\d+/
            - 'cell /Test case #\\d+ for Reporting/'
            - cell "Open"
            - cell "UAT"
            - cell "Reporting"
          - 'row /\\d+ Test case #\\d+ for Mobile Open UAT Mobile/':
            - cell /\\d+/
            - 'cell /Test case #\\d+ for Mobile/'
            - cell "Open"
            - cell "UAT"
            - cell "Mobile"
      - text: Use this pagination to practice asserting page numbers, active rows count, and navigation.
      - button "Prev" [disabled]
      - text: ""
      - button "Next" [disabled]
    `);
  await expect(page.getByLabel(') Search & Pagination Training').locator('tbody')).toContainText('Test case #11 for Dashboard');
});
