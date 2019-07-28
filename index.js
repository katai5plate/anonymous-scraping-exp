const puppeteer = require('puppeteer');

const { TOR_SOCKS_LISTENER_PORT } = require('./config.json');

const launchConfig = (anonymous = false) => ({
  headless: false,
  args: anonymous
    ? [`--proxy-server=socks5://127.0.0.1:${TOR_SOCKS_LISTENER_PORT}`]
    : []
});

[false, true].forEach(async mode => {
  const browser = await puppeteer.launch(launchConfig(mode));
  const page = await browser.newPage();
  await page.goto('https://kakunin.net/kun/');
  await page.screenshot({ path: `${mode ? 'Anonymous' : 'Your'}-IP.png` });
  await browser.close();
});
