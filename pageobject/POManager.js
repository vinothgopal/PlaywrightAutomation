const { LoginPage } = require("./LoginPage");
const { HomePage } = require("./HomePage");
class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getHomePage() {
    return this.homePage;
  }
}
module.exports = { POManager };
