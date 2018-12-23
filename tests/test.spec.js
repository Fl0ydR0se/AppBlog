import puppeteer from "puppeteer";
import faker from "faker";

const expect = require('chai').expect

const APP = "https://myappbloggg.herokuapp.com/";

const lead = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    message: faker.random.words()
  };


let page,
browser;


beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true});

    page = await browser.newPage();
  });

  afterAll(() => {
    browser.close();
  });


  describe.skip("Contact form", () => {
    test("lead can submit a contact request", async () => {
      await page.goto(APP);
      await page.waitForSelector("[data-test=contact-form]");
      await page.click("input[name=name]");
      await page.type("input[name=name]", lead.name);
      await page.click("input[name=email]");
      await page.type("input[name=email]", lead.email);
      await page.click("input[name=tel]");
      await page.type("input[name=tel]", lead.phone);
      await page.click("textarea[name=message]");
      await page.type("textarea[name=message]", lead.message);
      await page.click("input[type=checkbox]");
      await page.click("button[type=submit]");
      await page.waitForSelector(".modal");
    });
  });

  describe("Testing the title", () => {
    test(`assert that title is correct`, async () => {
      await page.goto(APP);
      let title = await page.title();
      expect(title).to.equal("Main page | My simple blog");      
    });
  },900000);