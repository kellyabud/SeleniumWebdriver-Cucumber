const { Given, Then, When, Before, After } = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');

const firefox = require('geckodriver');
const { By, Builder } = require('selenium-webdriver');
let driver = new Builder()
    .forBrowser('firefox')
    .build();

//SETUP CHROME DRIVER
//var chrome = require('selenium-webdriver/chrome');
//const {By} = require('selenium-webdriver');
// options   = new chrome.Options().headless();

//let driver = new webdriver.Builder()
//.forBrowser('chrome')
//.withCapabilities(webdriver.Capabilities.chrome())
//.setChromeOptions(options)
//.build();

Given('que o usuario esteja na tela de login', { timeout: 30 * 1000 }, async () => {

    await driver.get("https://github.com/login")
    await driver.manage().window().setRect({ width: 1050, height: 708 })


});
When('o usuario não informa email e senha e clica no botão Sign in', { timeout: 30 * 1000 }, async () => {

    await driver.findElement(By.name("commit")).click()


});

Then('o sistema exibe uma mensagem de erro', { timeout: 30 * 1000 }, async () => {

    assert(await driver.findElement(By.css(".js-flash-alert")).getText() == "Incorrect username or password.")
    await driver.close()


});

Given('que fulano esteja na tela de login', { timeout: 30 * 1000 }, async () => {

    driver = await new Builder().forBrowser('firefox').build();
    await driver.get("https://github.com/login");

});


When('o usuario informar email e senha válidos', { timeout: 30 * 1000 }, async () => {
    await driver.findElement(By.xpath("//input[@id=\'login_field\']")).sendKeys("kelly.abud@gmail.com")
    await driver.findElement(By.id("password"), 2000).click()
    await driver.findElement(By.id("password"), 2000).sendKeys("Yk120627")


});

Then('clicar no botão de Sign in e o usuário é logado com sucesso', { timeout: 30 * 1000 }, async () => {

    await driver.findElement(By.name("commit")).click();

    {
        const elements = await driver.findElements(By.css(".Button-label > .avatar"))
        assert(elements.length)
    }
    await driver.close()



});