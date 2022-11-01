// const userName = "Piotr";
// let age = 30;
// age = 18;

// function add(a: number, b: number) {
//   let result = a + b;
//   return result;
// }

// console.log(add(2, 4));

// age > 20 ? console.log("isOld") : console.log('isYoung');

// const button = document.querySelector("button")!;

// button.addEventListener('click', (event) => console.log(event))

// const add = (a: number, b: number = 1, c: number = 3) => a + b + c;

// console.log(add(4, 9, 1));

// console.log(add(4));

const hobbies = ["Sports", "Cooking"];
console.log([...hobbies]);
console.log(...hobbies);

const activeHobbies = ["Hiking"];
console.log(activeHobbies);

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person: {
  name: string;
  age: number;
} = {
  name: "Piotr",
  age: 34,
};
console.log(person);

const copiedPerson = { ...person };
console.log(copiedPerson);
