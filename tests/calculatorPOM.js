let homePage = require('../pages/homePage');

describe('demo calculator tests', function () {
    it('addition test', function () {
        homePage.get('http://juliemr.github.io/protractor-demo/')

        homePage.enterFirstNumber('13');
        homePage.enterSecondNumber('27');
        homePage.clickGo();
        homePage.verifyResult('40');

        browser.sleep(2000);
    });

    it('substraction test', function () {
        homePage.get('http://juliemr.github.io/protractor-demo/')

        homePage.enterFirstNumber('24');
        homePage.enterSecondNumber('10');
        homePage.clickGo();
        homePage.verifyResult('34');

        browser.sleep(2000);
    });
});