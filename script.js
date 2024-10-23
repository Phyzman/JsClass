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

// function greet() {
//   console.log("Good morning.");
// }
// greet();

// function add(a, b) {
//   return a + b;
// }
// let answer = add(4, 7);
// console.log(answer);
// let name = "Tola";
// let age = 6;
// function look() {
//   document.getElementById(
//     "now"
//   ).innerHTML = `My name is ${name}. I am ${age} years old.`;
// }
// // function greet() {
// //   console.log("Have you eaten")

// // }

// // function calAge(birthyear) {
// //   return 2024 - birthyear;
// // }

// // console.log("Your age is",calAge( 2010));

// // const calAge = (birthyear) => {
// //   return 2024 - birthyear;
// // };

// // console.log(calAge(2008));

// const calAge = (birthyear) => 2024 - birthyear;
// console.log(calAge(2008));

// const data = ["Ade", "OIC", 12, true];
// console.log(data[1]);

// const student = { name: "Ade", age: 12, school: "OIC", isPresent: true };
// console.log(student.name);
// console.log(`${student.name} is a boy. He is ${student.age} years old`);

// let num = document.getElementById("numInput");
// function pressOne() {
//   num.value += "1";
// }

// function pressTwo() {
//   num.value = "";
// }

// let books = "The god's are not to be blamed.";
// const about = `My name is Mariam. I am 5 years old.
//    I live in Osogbo. The name of my best friend is Mariam.
//     She lives in Ibadan. My name is Mariam. I am 5 years old.
//      I live in Osogbo. The name of my best friend is Mariam.
//       She lives in Ibadan.My name is Mariam. I am 5 years old. I live in Osogbo.
//       The name of my best friend is Mariam. She lives in Ibadan.My name is Mariam.
//       I am 5 years old. I live in Osogbo. The name of my best friend is Mariam.
//       She lives in Ibadan.My name is Mariam. I am 5 years old. I live in Osogbo.
//       The name of my best friend is Mariam. She lives in Ibadan.`;

// let girlName = " Grace";
// const phoneNumber = "08056376378899";
// console.log(girlName.at(2));
// console.log(girlName.concat(" Babalola"));
// console.log(about.includes("ball"));
// // console.log(about.replace('Mariam', 'Grace'));
// console.log(girlName.endsWith("a"));
// console.log(phoneNumber.startsWith("080"));
// console.log(girlName.trim());
// console.log(girlName.slice(-1));
// console.log(girlName.toUpperCase());
// console.log(girlName.indexOf("a"));
// console.log(about.replaceAll("Mariam", "Tolu"));

// let firstName = "Afeez";
// let lastName = "Olaniyi";

// document.getElementById("show").innerHTML = `Welcome ${firstName} ${lastName}`;

// let height = "12";
// console.log(Number(height));
// console.log(typeof Number(height));

// console.log(girlName.length);

// document.getElementById("demo").innerHTML = about + girlName;
// console.log(about.length);
// console.log(typeof girlName);

// const cars = ["Volvo", "Toyota", "Mitsubishi"];
// const car = [];
// car[0] = "Volvo";
// car[1] = "Toyota";
// car[3] = "Mitsubishi";
// console.log(cars[0]);
// console.log(typeof cars);
// const novel = [
//   "Rich dad, poor dad",
//   "Preserverance",
//   "Grit",
//   "The god's are not to be blamed",
//   "The scope of money",
// ];
// console.log(novel[3]);
// console.log(novel.length);
// console.log(novel.toString());
// console.log(novel.at(2));
// console.log(novel.join("*"));
// console.log(novel.pop());
// console.log(novel.push("Grit"));
// console.log(novel.shift());
// console.log(novel.unshift("Hello"));
// console.log(novel);
// // console.log(novel.splice(0, 2));
// console.log(novel.slice(2, 4));
// // console.log(novel.indexOf('Grit'));
// const ages = [14, 6, 19, 20, 17, 23];
// const calAges = ages.filter(eligible);
// function eligible(value, index, arr) {
//   return value < 18;
// }
// console.log("CalAges here: ", calAges);
// console.log(novel.includes("Grit"));

// let userAge = document.querySelector(".age");
// let demo = document.getElementById("demo");
// function checkEligibilty() {
//   if (userAge.value >= 18) {
//     demo.innerHTML = "You are eligible to vote.";
//     // console.log('You are eligible to vote.');
//   } else {
//     demo.innerHTML = "You are not eligible to vote.";
//     // console.log('You are not eligible to vote');
//   }
// }
// let bmi = document.getElementById("bmi");
// let weight = document.getElementById("weight");
// let heights = document.getElementById("height");

// function divideUserBmi() {
//   if (weight.value == "" && heights.value == "") {
//     bmi.innerHTML = "You are required to fill this space.";
//   } else if (weight.value > 0 && heights.value > 0) {
//     let answer = weight.value / heights.value;
//     bmi.innerHTML = `Your BMI is ${answer.toFixed(2)}Kg/m`;
//   } else {
//     bmi.innerHTML = "Enter a valid value.";
//   }
// }

let text = " ";
// let studentId = [3, 6, 9, 2, 7, 9];
// studentId.forEach(multiply);

// function multiply(value, index, array) {
//   text += value * 2 + "<br/>";
// }
// document.getElementById("demo").innerHTML = text;
// console.log(text);

let studentInfo = [
  { name: "ade ", school: "oic", age: 12, isPresent: true, mathScore: 8 },
  {
    name: "Kamaldeen ",
    school: "oic",
    age: 14,
    isPresent: true,
    mathScore: 14,
  },
  { name: "ade ", school: "oic", age: 12, isPresent: true, mathScore: 8 },
  { name: "Adesoji ", school: "oic", age: 5, isPresent: false, mathScore: 9 },
  { name: "Victor ", school: "oic", age: 16, isPresent: true, mathScore: 12 },
  { name: "Afeez ", school: "oic", age: 20, isPresent: true, mathScore: 15 },
];

// studentInfo.map((value, index) =>{
//    text += value.name
// })
// document.getElementById('demo').innerHTML = text

// // console.log(typeof studentInfo);
// let answer = "";
// studentInfo.forEach(listStudent);
// function listStudent(value, index, array) {
//   answer += value.mathScore + 5 + value.name + '<br/>';
//   // answer += value.mathScore + 5 <= 14 ;
// }
// console.log(answer);
// document.getElementById("bmi").innerHTML = answer;
let searchInfo = "";
let inputData = document.getElementById("search");
let searchResult = document.getElementById("demo");
function search() {
  searchInfo += studentInfo.filter((item) =>
    item.name.includes(inputData.value)
  );
  searchResult.innerHTML = searchInfo;
}

let digit = [4, 8, 3, 5, 2, 0];
let someValues = digit.every(check);

function check(value) {
  return value > 5;
}
console.log(someValues);

let res = digit.reduce(add);
function add(total, value) {
  return total + value;
}
console.log(res);

let a = "Funke";
let b = "Tola";
console.log(...a, ...b);
console.log(a);
// trunc is a math method that returns an integal
let solution = Math.trunc(Math.random() * 100);
// floor is a math method that is used to return the highest 
 

console.log(solution);
