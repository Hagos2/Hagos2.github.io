"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   
    /*eslint-disable*/
/*const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount; 
*/


class Bank{
    //static nextNumber=0;
    
        constructor() {

            this._accounts = [];
        
            this.nextNumber = 1;
        
          }
        
          addAccount() {
        
            this._accounts.push(new Account(this.nextNumber));
        
            this.nextNumber++;
        
          }
        
          addSavingsAccount(interest) {
        
            this._accounts.push(new SavingsAccount(this.nextNumber, interest));
        
            this.nextNumber++;
        
          }
        
          addCheckingAccount(overdraft) {
        
            this._accounts.push(new CheckingAccount(this.nextNumber, overdraft));
        
            this.nextNumber++;
        
          }
        
          closeAccount(number) {
        
            const index = this._accounts.findIndex((item) => item._number === number);
        
            this._accounts.splice(index, 1);
        
          } 
          accountReport() {

            let report = "";
        
            for (let element of this._accounts) {
        
              report += element.toString() + "\n";
        
            }
        
            return report;
        
          }
        
          endOfMonth() {
        
            // eslint-disable-next-line id-length
        
            let rpt = this._accounts.map((n) => n.endOfMonth());
        
            return rpt.join("\n");
        
          }
        
        }
    
    







/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;










/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;