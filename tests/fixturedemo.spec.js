import { test } from '../utils/fixture'; // ✅ Custom test with poManager
import { expect } from '@playwright/test'; // ✅ Import expect from Playwright

const dataset = require('../utils/test.json');

test('E22 TC1', {
    tag:["@sanity", "@regression"], 
    annotation: [{type:"TC",description:"Jira ID"}]// ✅ Tags for the test
},async ({ poManager }) => {
  const loginPage = poManager.getLoginPage();
  const homePage = poManager.getHomePage();

  await loginPage.navigate(dataset.url);
  await expect(poManager.page).toHaveTitle("Test Login Page for Automation Testing Practice");
  await loginPage.login(dataset.username, dataset.password);
  expect(await homePage.getWelcomeMessage()).toBe("Secure Area page for Automation Testing Practice");
  await expect(poManager.page).toHaveTitle("Secure Page page for Automation Testing Practice");
  await homePage.clickLogoutButton();
  await expect(poManager.page).toHaveTitle("Test Login Page for Automation Testing Practice");
});
