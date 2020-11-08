describe('demo calculator tests', function(){
    it('addition test', function(){
        browser.get('http://juliemr.github.io/protractor-demo/')
        //one way
        var input = element(by.model('first'));
        input.sendKeys('7');
        //another way
        element(by.model('second')).sendKeys('14');
        //css
        element(by.css('[ng-click="doAddition()"]')).click();
        //id
        //element(by.id('gobutton')).click();

        let result = element(by.cssContainingText('.ng-binding','21'));
        expect(result.getText()).toEqual('21');

        browser.sleep(3000)
    });

});