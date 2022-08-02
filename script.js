const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));
