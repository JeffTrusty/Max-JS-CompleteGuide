const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)')
});

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    sloMo: 80,
    args: ['--window-size-1920,1080']
  });
  const page = await browser.newPage();
  const page.goto('C:\Users\jtrusty\Documents\Projects\Udemy\Max\JavaScript-The Complete Guide\31-Testing\index.html');
});
