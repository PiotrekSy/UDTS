function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    return result;
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
console.log(addAndHandle(19, 11, function (result) { return console.log(result); }));
