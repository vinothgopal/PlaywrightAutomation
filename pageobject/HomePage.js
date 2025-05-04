class HomePage {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.locator("h1");
    this.logoutButton = page.locator("[href*='logout']");
  }
  async getWelcomeMessage() {
    return await this.welcomeMessage.innerText();
  }
  async clickLogoutButton() {
    await this.logoutButton.click();
  }
}
module.exports = { HomePage };
