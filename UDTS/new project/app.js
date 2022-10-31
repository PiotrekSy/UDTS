// const add = (a: number, b: number, showResult: boolean, phrase : string) =>{
//     showResult ? console.log(a+b) : console.log(phrase + 'Odpowiedź z printresult = "false"')
// }
// const number1 = 5;
// const number2 = 2.5;
// const printResult = false;
// const phrase = 'NIE WYŚWIETLAM ODPOWIEDZI! ';
// add(number1, number2, printResult, phrase)
var person = {
    name: "Piotrek",
    age: 34,
    hobbies: ["Sport", "Film"]
};
var favouriteActivities;
favouriteActivities = ["Sports"];
console.log(person.name);
console.log(person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
