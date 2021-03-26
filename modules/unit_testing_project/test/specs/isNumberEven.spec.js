const NumbersValidator = require("../../app/numbers_validator");
const {expect} = require("chai");


describe("isNumberEven positive scenaraios", function(){
    let validator;
    
    beforeEach(function() {
        validator = new NumbersValidator();
    });

    afterEach(function() {
        validator = null;
    });

    it("should return true if number is even", function() {
        expect(validator.isNumberEven(4)).to.be.equal(true);
    });

    it("should return false if number is not even (odd)", function() {
        expect(validator.isNumberEven(3)).to.be.equal(false);
    });

    it("chai test", function() {
        expect(5).to.be.equal(5);
        expect({a :"alma", b: 55}).to.be.eql({a :"alma", b: 55});
        expect(["alma",55]).to.have.lengthOf(2);
    });

});