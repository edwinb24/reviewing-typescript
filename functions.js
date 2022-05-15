"use strict";
const add = (n1, n2) => n1 + n2;
const addAndHandle = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
const printResult = (num) => {
    console.log("Result: " + num);
};
printResult(add(5, 20));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(2, 3, printResult);
