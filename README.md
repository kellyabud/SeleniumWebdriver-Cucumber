<div align="center">
<img src="https://github.com/kellyabud/SeleniumWebdriver-Cucumber/assets/135430840/d72c2375-1308-4a0a-880d-ce4cc9f6bd8d" width="400px" /></div>


$ npm init -y

npm install --save-dev @cucumber/pretty-formatter @cucumber/cucumber

$ npm install selenium-webdriver assert

$ npm install chromedriver geckodriver

# Criar a pasta features > incluir arquivo BDD
# Criar features/step-definitions > incluir arquivo JS
# Criar .gitignore
# No arquivo package.json > incluir script test
$ "npx cucumber-js -f @cucumber/pretty-formatter Features/* --format html:cucumber-report.html"
$ npm test
# Copiar do terminal o código BDD gerado
# Incluir no topo do arquivo JS 

$ const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const ChromeDriver = require('chromedriver');
const {By} = require('selenium-webdriver');
var options   = new chrome.Options().headless();
let driver = new webdriver.Builder()
   .forBrowser('chrome')
   .withCapabilities(webdriver.Capabilities.chrome())
   .setChromeOptions(options)
   .build();

//SETUP FIREFOX DRIVER 
const firefox = require('geckodriver');
const { By, Builder } = require('selenium-webdriver');
let driver = new Builder()
    .forBrowser('firefox')
    .build().
