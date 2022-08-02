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
// const person = {
//   name: {
//     first: "Bob",
//     last: "Smith",
//   },
//   age: 32,
//   bio: function () {
//     console.log(
//       `${this.name.first} ${this.name.last} is ${this.age} years old.`
//     );
//   },
//   introduceSelf: function () {
//     console.log(`Hi! I'm ${this.name.first}.`);
//   },
// };

// person["name"]["last"] = "Lombard";
// person["eyes"] = "hazel";
// person.farewell = function () {
//   console.log(`Bye everybody!`);
// };

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;

// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi!, I'm ${this.name}.`);
//   };
//   return obj;
// }

// const salva = createPerson("Salva");
// salva.name;
// salva.introduceSelf();

// const frankie = createPerson("Frankie");
// frankie.name;
// frankie.introduceSelf();

// function Person(name) {
//   this.name = name;
//   this.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
// }

// const salva = new Person("Salva");
// const frenkie = new Person("Frenkie");

// MDN exercise 1:
// const cat = {
//   name: "Bertie",
//   breed: "Cymric",
//   color: "white",
//   greeting: function () {
//     console.log("Meow!");
//   },
// };

// // Put your code here
// const catName = cat["name"];
// cat.greeting();
// cat.color = "black";

// MDN exercise 2:
const band = {
  name: "Boys 2 Men",
  nationality: "USA",
  genre: "RnB",
  members: 4,
  formed: 1988,
  split: false,
  albums: [
    {
      name: "Christmas Interpretations",
      released: 1994,
    },
    {
      name: "Evolution",
      released: 1997,
    },
  ],
};

const bandInfo = `${band.name} was created back in ${
  band.formed
}, they have been active for ${2022 - band.formed}. They are from ${
  band.nationality
} and have ${band.members} members. They released their first album in ${
  band.albums[0].released
} named ${band.albums[0].name}`;

console.log(bandInfo);
