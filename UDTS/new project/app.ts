// UNKNOWN TYPE
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Piotr";

if (typeof userInput === "string") userName = userInput;

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("msg", 200 )

console.log(result)
