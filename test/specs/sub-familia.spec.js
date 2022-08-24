const homepage = require("../pageobjects/home.page");
var expect = require("chai").expect;

describe("Category page: ", () => {
  beforeEach(async () => {
    await driver.launchApp();
  });

  it.only("Should validate first category price", async () => {
    await browser.pause(5000);
    await homepage.btnArea.touchAction("tap");
    // await driver.lock(5);
    await homepage.btnFamilia.touchAction("tap");
    await homepage.btnSubFamilia.touchAction("tap");

    const status = await homepage.labelCategoria.getText();
    expect(status).to.equal("desde 1329€");
  });

  it("Should validate first category price", async () => {
    await homepage.btnArea.touchAction("tap");
    await driver.gsmCall("555-123-4567", "Phone");
    await homepage.btnFamilia.touchAction("tap");
    await homepage.btnSubFamilia.touchAction("tap");

    const status = await homepage.labelCategoria.getText();
    expect(status).to.equal("desde 1329€");
  });
});
