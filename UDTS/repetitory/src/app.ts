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

// const hobbies = ["Sports", "Cooking"];
// console.log([...hobbies]);
// console.log(...hobbies);

// const activeHobbies = ["Hiking"];
// console.log(activeHobbies);

// activeHobbies.push(...hobbies);
// console.log(activeHobbies);

const person = {
  firstName: "Piotr",
  age: 34,
};
console.log(person);

const copiedPerson = { ...person };
console.log(copiedPerson);

const add = (...numbers: number[]): string => {
  const result = numbers.reduce((acc, ele) => acc + ele);
  return result.toString();
};

const addedNumbers = add(4, 5, 6, 7, 8, 8, 8);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// const [hobby1, hobby2] = hobbies;
// console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(person.firstName);

console.log(person.age);
