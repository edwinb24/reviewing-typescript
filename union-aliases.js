"use strict";
const combine = (input1, input2, resultConversion) => (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion == "as-number"
    ? +input1 + +input2
    : input1.toString() + input2.toString();
const combineAges = combine(20, 23, "as-number");
console.log(combineAges);
const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
