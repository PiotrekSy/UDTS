// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; //tablica stringów
//   role: [number, string]; //Tuple
// } = {
//   name: "Piotrek",
//   age: 34,
//   hobbies: ["Sports", "Film"],
//   role: [2, "admin"], // Tuple:
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.hobbies[0]);
// console.log(person.hobbies[1]);
// console.log(person.role);
// console.log(person.role[0]);
// console.log(person.role[1]);
// ENUMS:
// enum Role {ADMIN = 6, READ_ONLY, AUTHOR};
// const person = {
//   name: "Piotrek",
//   age: 34,
//   hobbies: ["Sports", "Film"],
//   role: Role[6] //enum used
// };
// console.log(person.role);
// UNION TYPE
// const combine = (input1: number | string, input2: number | string) => {
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     const result = input1 + input2;
//     return result;
//   } else {
//     const result = input1.toString() + input2.toString();
//     return result;
//   }
// };
// const combinedAges = combine(30, 50);
// console.log(combinedAges);
// const combinedNames = combine("Max", "Anna");
// console.log(combinedNames);
// LITERALS:
var combine = function (input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        var result_1 = +input1 + +input2;
        return result_1;
    }
    else {
        var result_2 = input1.toString() + input2.toString();
        return result_2;
    }
    return result;
};
var combinedAges1 = combine(30, 50, "as-string");
console.log(combinedAges1);
var combinedAges2 = combine("30", "60", "as-number");
console.log(combinedAges2);
var combinedNames = combine("Max", "Anna", "as-string");
console.log(combinedNames);
