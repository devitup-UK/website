module.exports = {
    'Deploy SQL Script' : function (browser) {
      browser
        .url('https://cloud207.unlimitedwebhosting.co.uk:8443/')
        .waitForElementVisible('body')
        .setValue('#loginSection-username', '')
        .setValue('#loginSection-password', '')
        .waitForElementVisible('button[name=send]')
        .click('button[name=send]')
        .pause(1000)
        .useXpath().click("//span[contains(@class, 'caption-service-text')]//a[contains(@class, 'toggler')]")
        .useXpath().click("//select//option[text() = 'tomaldyc_staging.api.devitup.co.uk']")
        .useXpath().click("//button[contains(@class, 'js-webadmin')]");
        browser.windowHandles(function(result) {
            var temp = result.value[1];
            this.switchWindow(temp);
        })
        .useXpath().click("//a[contains(@class, 'tab')]//img[contains(@class, 'icon ic_b_import')]")
        .waitForElementVisible('input[name=import_file]')
        .pause(1000)
        .setValue('input[name=import_file]', require('path').resolve(__dirname + '/testfile.sql'))
        .click("#buttonGo")
        .pause(5000)
        .end();
    }
  };