import { test as base } from '@playwright/test';
import { POManager } from '../pageobject/POManager';

// Define a custom test with a poManager fixture
export const test = base.extend({
  poManager: async ({ page }, use) => {
    const poManager = new POManager(page);
    await use(poManager);
  },
});
