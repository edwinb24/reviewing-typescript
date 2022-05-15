type Combined = string | number;
type resultConversion = "as-number" | "as-text";

const combine = (
    input1: Combined,
    input2: Combined,
    resultConversion: resultConversion
) =>
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion == "as-number"
        ? +input1 + +input2
        : input1.toString() + input2.toString();

const combineAges = combine(20, 23, "as-number");
console.log(combineAges);

const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
