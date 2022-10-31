// const add = (a: number, b: number, showResult: boolean, phrase : string) =>{
//     showResult ? console.log(a+b) : console.log(phrase + 'Odpowiedź z printresult = "false"')

// }

// const number1 = 5;
// const number2 = 2.5;
// const printResult = false;
// const phrase = 'NIE WYŚWIETLAM ODPOWIEDZI! ';

// add(number1, number2, printResult, phrase)

const person = {
  name: "Piotrek",
  age: 34,
  hobbies: ["Sport", "Film"],
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);
console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
