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
var combine = function (input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        var result = input1 + input2;
        return result;
    }
    else {
        var result = input1.toString() + input2.toString();
        return result;
    }
};
var combinedAges = combine(30, 50);
console.log(combinedAges);
var combinedNames = combine("Max", "Anna");
console.log(combinedNames);
