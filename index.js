// const for Selenium Webdriver to allocate elements on a wepage
const {Builder, By} = require('selenium-webdriver'); 

// creating a const to call when adding implicit waits
const delay = ms => new Promise(res => setTimeout(res, ms)); 

// creating a function which adds a timestamp for every logs to time up the test execution 
  (function() {
    var old = console.log;
    console.log("> Log Date Format DD/MM/YY HH:MM:SS - UTCString");
    console.log = function() {
        var n = new Date();
        var d = ("0" + (n.getDate().toString())).slice(-2),
            m = ("0" + ((n.getMonth() + 1).toString())).slice(-2),
            y = ("0" + (n.getFullYear().toString())).slice(-2),
            t = n.toUTCString().slice(-13, -4);
        Array.prototype.unshift.call(arguments, "[" + d + "/" + m + "/" + y + t + "]");
        old.apply(this, arguments);
    }
})();

// creating a function which contains the test execution. Choosing firefox as preferred browser.
async function e2eFav(){
    let driver = new Builder().forBrowser('firefox').build();

    console.log("Test starts");

// goes to desired webpage via get method
driver.get("https:etsy.com/");

// performs steps
const acceptBtn = driver.findElement(By.className('wt-btn wt-btn--filled wt-mb-xs-0'));
acceptBtn.click();

await delay(5000);
console.log("Accepts cookies button");

const loginBtn = driver.findElement(By.className('wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin'));
loginBtn.click();

await delay(2000);
console.log("Presses on login button")

const emailInput = driver.findElement(By.id('join_neu_email_field'));
emailInput.sendKeys('danix93@24hinbox.com');
const passwordInput = driver.findElement(By.id('join_neu_password_field'));
passwordInput.sendKeys('qwe123');

await delay(2000);
console.log("Enters correct credentials")

const einloggenBtn = driver.findElement(By.className('wt-btn wt-btn--primary wt-width-full'));
einloggenBtn.click();

await delay(5000);
console.log("Logs in");

const searchInput = driver.findElement(By.xpath('//*[@id="global-enhancements-search-query"]'));

await delay(3000);
console.log("Goes to search")

searchInput.sendKeys('paper');

await delay(2000);
console.log("Fills up search field")

const searchBtn= driver.findElement(By.className('wt-icon wt-nudge-b-2 wt-nudge-r-1'));
searchBtn.click();

await delay(5000);
console.log("Presses on search button");

const addtoFav = driver.findElement(By.className('favorite-listing-button-icon-container'))
await addtoFav.click();

console.log("Clicks on item");

await delay(10000);

const clickonFavorite = driver.findElement(By.className('wt-tooltip wt-tooltip--disabled-touch'));
await clickonFavorite.click();
console.log("Goes to favorites page");

console.log("Test ends");

}
e2eFav();

