// let demo = document.getElementById("demo");
// function showDate() {
//   demo.innerHTML = new Date().getFullYear();
//   //   console.log(new Date().getFullYear());
//   window.prompt("How old are you?");
//   document.write("Good morning");
// }

// // var
// var weight = "12kg";
// console.log(weight);

// // let
// let name = "Ade";
// console.log(name);
// let num = "1";
// let number = 1;
// const isPresent = true;
// // const is used to declare a constant variable
// const age = 12;
// // const student = {key: value}
// const student = { name: "Ade", age: 12, school: "OIC", isPresentToday: true };
// const names = ["Ade", 12, true, "OIC"];
// console.log(names.length);
// console.log(names[0]);

// let a = 5;
// let b = "6";
// console.log(a + Number(b));

// // ways of displaying data
// // 1. console.log()
// // 2.window.alert()
// // 3. DOM document.getElementById()
// // 4. window.prompt()
// // 5. document.write('Good morning')

// // datatypes
// // 1.string
// // 2.Number
// // 3. Boolean
// // 4.object: divided into object and array
// // 5. Undefined

// let person = document.getElementById("personName");
// let personAge = document.querySelector(".age");
// function about() {
//   person.innerHTML = "My name is Mariam.";
//   personAge.innerHTML = "I am 5years old.";
// }

// let c = 7;
// let f = 6;
// // condition ? true : false
// c <= 4 ? "Good" : "bad";
// console.log(c - f);
// if (c <= 4) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// c += 5
// console.log(c);

// let firstName = 'Grace'
// let lastName = ' Ole'
// console.log(firstName + lastName);

function greet() {
  console.log("Good morning.");
}
greet();

function add(a, b) {
  return a + b;
}
let answer = add(4, 7);
console.log(answer);
let name = "Tola";
let age = 6;
function look() {
  document.getElementById(
    "now"
  ).innerHTML = `My name is ${name}. I am ${age} years old.`;
}
// function greet() {
//   console.log("Have you eaten")

// }

// function calAge(birthyear) {
//   return 2024 - birthyear;
// }

// console.log("Your age is",calAge( 2010));

// const calAge = (birthyear) => {
//   return 2024 - birthyear;
// };

// console.log(calAge(2008));

const calAge = (birthyear) => 2024 - birthyear;
console.log(calAge(2008));

const data = ["Ade", "OIC", 12, true];
console.log(data[1]);

const student = { name: "Ade", age: 12, school: "OIC", isPresent: true };
console.log(student.name);
console.log(`${student.name} is a boy. He is ${student.age} years old`);

let num = document.getElementById("numInput");
function pressOne() {
  num.value += "1";
}

function pressTwo() {
  num.value = "";
}
