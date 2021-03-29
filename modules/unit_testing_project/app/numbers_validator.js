/**
 *
 *  A simple class containing method for validating methods
 * @class NumbersValidator
 */
class NumbersValidator {
    /**
     * Creates an instance of NumbersValidator.
     * @memberof NumbersValidator
     */
    constructor(){

    }

    /**
     *
     *
     * @param {Number} number number to check
     * @return {Boolean} true if number is even
     * @memberof NumbersValidator
     */
    isNumberEven(number) {
        const typeOfVariable = typeof number;
        if(typeOfVariable !== 'number'){
            throw new Error(`[${number})] is not of type "Number" it is of type "${typeOfVariable}"`);
        } else {
            return number % 2 === 0;
        }
    }
}

module.exports = NumbersValidator;