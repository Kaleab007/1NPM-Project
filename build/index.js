"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("./utility");
var firstNumber = 2;
var secondNumber = 3;
var userName;
userName = "mrspotts";
//display user welcome mss
function showUser(user) {
    return "Welcome, ".concat(user, "!");
}
console.log((0, utility_1.add)(firstNumber, secondNumber));
console.log(showUser(userName));
