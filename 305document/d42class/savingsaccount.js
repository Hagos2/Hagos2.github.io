"use strict";

//const acc = require("./account.js");//with node need the name of your file with your functions here
//const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
/*eslint-disable*/
/* exports at end of file since exporting an object, which can only be referenced after definition   */
/**
 * 
 */
class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this.setInterest(interest);
        
    }
    addInterest() {
        let calcInterest = (this._balance * this._interest / 100);
        return this.deposit(calcInterest);
    }
    getInterest() {
        return this._interest;
    }
    setInterest(interest) {
        this._interest = interest;
    }
    toString() {
        let str = "SavingsAccount " + this._number + ":" + " balance: " + this._balance + " interest: " + this._interest;
        return str;
    }
    endOfMonth() {
        this.addInterest();
        let report = "Interest added SavingsAccount " + this._number + ":" + " balance: " + this._balance + " interest: " + this._interest;
        return report;
    }
}






/* global exports */
//exports.SavingsAccount = SavingsAccount;