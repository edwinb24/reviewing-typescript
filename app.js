"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "mario";
if (typeof userInput === "string")
    userName = userInput;
const generateError = (message, code) => {
    throw { message, errorCode: code };
};
generateError("An ErrorCode", 500);
