// @ts-check
import { test, expect } from "@playwright/test";
const { POManager } = require("../pageobject/POManager");
const dataset = JSON.parse(JSON.stringify(require("../utils/test.json")));
const { config } = require("dotenv");

test("E22 TC1", async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const homePage = poManager.getHomePage();
  await loginPage.navigate(dataset.url);
  await expect(page).toHaveTitle("Test Login Page for Automation Testing Practice");
  await loginPage.login(dataset.username, dataset.password);
  expect(await homePage.getWelcomeMessage()).toEqual("Secure Area page for Automation Testing Practice");
  await expect(page).toHaveTitle("Secure Page page for Automation Testing Practice");
  await homePage.clickLogoutButton();
  await expect(page).toHaveTitle("Test Login Page for Automation Testing Practice");

  // Expect a title "to contain" a substring.
});
