import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import { scheduleVideoCutting } from './helpers/cropVideo/ffmpeg.js';

// Load environment variables from .env file
dotenv.config();

// Retrieve username and password from environment variables
// const USERID = process.env.USERID;
// const PASSWORD = process.env.PASSWORD;

// console.log(USERID, PASSWORD);
// if (!USERID || !PASSWORD) {
//   console.error('Please provide INSTA_USERNAME and INSTA_PASSWORD environment variables.');
//   process.exit(1);
// }

scheduleVideoCutting()


// (async () => {
//   // Launch the browser
//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 10,
//     defaultViewport: null,
//   });

//   // Create a page
//   const page = await browser.newPage();

//   // Go to Instagram
//   await page.goto('https://www.instagram.com/');

//   const title = await page.title();
//   console.log(title);

//   // Wait for username and password fields to appear
//   await page.waitForSelector('input[name="username"]');
//   await page.waitForSelector('input[name="password"]');

//   // Input username and password
//   await page.type('input[name="username"]', USERID);
//   await page.type('input[name="password"]', PASSWORD);

//   // Submit the login form
//   await page.click('button[type="submit"]');

//   // Wait for navigation
//   await page.waitForNavigation();

//   await page
//   .locator('button')
//   .click();
//   await page.waitForNavigation();

//   await page
//   .locator('button')
//   .click();

//   await page.waitForSelector('button > .')

//   // Scroll down the page
//   await page.evaluate(() => {
//     window.scrollBy(0, window.innerHeight);
//   });
//   await page.waitForNavigation();

//     // Query for an element handle.
//     const element = await page.waitForSelector('div > .x9f619 ');

//     // Do something with element...
//     await element.click(); // Just an example.
  
//   // crop the video

// })();
