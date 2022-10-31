const person: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: "Piotrek",
  age: 34,
  role: [2, "admin"], // Tuple:
};

console.log(person.name);
console.log(person.age);
console.log(person.role);
