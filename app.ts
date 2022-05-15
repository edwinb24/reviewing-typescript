let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "mario";

if (typeof userInput === "string") userName = userInput;

const generateError = (message: string, code: number): never => {
    throw { message, errorCode: code };
};

generateError("An ErrorCode", 500);
