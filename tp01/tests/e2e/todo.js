/**
 * Created by Training on 26/11/2015.
 */
describe('myApp todo list', function() {
    it('Go to Home', function() {
        browser.get('http://localhost:9000/');
        var countElm = element.all(by.repeater('i in myObject')).count();
        expect(countElm).toBe(9);
    });

});