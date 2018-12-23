import puppeteer from "puppeteer";
import faker from "faker";

const expect = require('chai').expect

const APP = "https://myappbloggg.herokuapp.com/";

const randomWord = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    message: faker.random.words()
  };


let page,
browser;


beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      //slowMo: 100
    });

    page = await browser.newPage();
  });

  afterAll(() => {
    browser.close();
  });


  describe("Create the", () => {
    test("simple record", async () => {
      await page.goto(APP);
      await page.waitForSelector(".card-content");
      await page.click(".btn-floating");
      await page.waitForSelector(".modal-content");
      await page.type("#title", randomWord.name);
      await page.type("#text", randomWord.message);
      await page.waitForSelector("#createPost");
    },90000);
  });

  describe("Testing the title", () => {
    test(`assert that title is correct`, async () => {
      await page.goto(APP);
      let title = await page.title();
      expect(title).to.equal("Main page | My simple blog");      
    },90000);
  });
