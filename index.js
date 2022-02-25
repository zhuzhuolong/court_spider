const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');
  const inputElement = await page.$('.s_ipt');
  await inputElement.type('some')
  await inputElement.press('Enter')
  await page.screenshot({path: 'screenshot.png'});
  await browser.close();
})();