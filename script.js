// Exercise 1
// const user = {};

// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// Exercise 2
// let schedule = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule));

// Exercise 3
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function sumOfSalaries(obj) {
//   let total = 0;
//   for (let key in obj) {
//     total += obj[key];
//   }
//   return total;
// }

// console.log(sumOfSalaries(salaries));

// Exercise 4
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multipleNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(multipleNumeric(menu));
// console.log(menu);

// ================ MDN ================
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
