// UNKNOWN TYPE
var userInput;
var userName;
userInput = 5;
userInput = "Piotr";
if (typeof userInput === "string")
    userName = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("msg", 200);
console.log(result);
