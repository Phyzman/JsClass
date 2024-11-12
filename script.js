"use strict";

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

// let text = " ";
// let studentId = [3, 6, 9, 2, 7, 9];
// studentId.forEach(multiply);

// function multiply(value, index, array) {
//   text += value * 2 + "<br/>";
// }
// document.getElementById("demo").innerHTML = text;
// console.log(text);

// let studentInfo = [
//   { name: "ade ", school: "oic", age: 12, isPresent: true, mathScore: 8 },
//   {
//     name: "Kamaldeen ",
//     school: "oic",
//     age: 14,
//     isPresent: true,
//     mathScore: 14,
//   },
//   { name: "ade ", school: "oic", age: 12, isPresent: true, mathScore: 8 },
//   { name: "Adesoji ", school: "oic", age: 5, isPresent: false, mathScore: 9 },
//   { name: "Victor ", school: "oic", age: 16, isPresent: true, mathScore: 12 },
//   { name: "Afeez ", school: "oic", age: 20, isPresent: true, mathScore: 15 },
// ];

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
// let searchInfo = "";
// let inputData = document.getElementById("search");
// let searchResult = document.getElementById("demo");
// function search() {
//   searchInfo += studentInfo.filter((item) =>
//     item.name.includes(inputData.value)
//   );
//   searchResult.innerHTML = searchInfo;
// }

// let digit = [4, 8, 3, 5, 2, 0];
// let someValues = digit.every(check);

// function check(value) {
//   return value > 5;
// }
// console.log(someValues);

// let res = digit.reduce(add);
// function add(total, value) {
//   return total + value;
// }
// console.log(res);

// let a = "Funke";
// let b = "Tola";
// console.log(...a, ...b);
// console.log(a);
// // trunc is a math method that returns an integal
// let solution = Math.trunc(Math.random() * 100);
// // floor is a math method that is used to return the highest

// console.log(solution);

// let form = document.getElementById("form");
// let error1 = document.getElementById("error1");
// let email = document.getElementById("email");
// let error2 = document.getElementById("error2");
// let phone = document.getElementById("phoneNumber");

// form.addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault();
//   const regex = /^((\+234)|0)?[789]\d{9}$/;
//   console.log(phone);

//   if (regex.test(phone.value)) {
//     error2.innerHTML = "Good";
//   } else {
//     error2.innerHTML = "Wrong phone number";
//   }

//   if (email.value == "" || email.value == 0) {
//     error1.innerHTML = "This space is required.";
//   } else if (!email.value.includes("@") && email.value.includes(".")) {
//     error1.innerHTML = "Invalid email address";
//   } else {
//     error1.innerHTML = "Good 👍";
//   }

// if(phone.value == '' || phone.value == 0) {
//   error2.innerHTML = 'You are required to fill this space'
// } else if ((phone.value).length >=12 || (phone.value).length <=10){
//   error2.innerHTML = 'Invalid phone number'
// } else if(!(phone.value).startsWith('081') || (phone.value).startsWith('080')  || (phone.value).startsWith('090')) {
//   error2.innerHTML = 'Invalid phone number'
// } else {
//   error2.innerHTML = '✔'
// }
// }

//  let number =0;

// let text = "";

// for(let i = 0;  i < 100; 	++i ){

//   text += "the number is" + i + "<br>"

// }

// document.getElementById("list").innerHTML = text

// const person = {fname:"John", lname:"Doe", age:25};

// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }

// const fruit = new Map([
//   ["apples", 300],
//   [ 200, "oranges"],
//   ["pineapple", 100]
// ])

// let single = fruit.get(200);

// const artist = new Map();

// artist.set("burnaboy", 100);
// artist.set("speedingthin", 600);
// artist.set("wizkid", 700);

// let single = artist.get("wizkid")
// document.getElementById("list").innerHTML = "Artist rate" + single + "wizz"

// const stringToNumber = Number("2.22");
// console.log(stringToNumber)

// const string = "5";
// const number = +  string

// const plus =  number + string

// console.log(typeof number)

// function changer(){

// let test = document.getElementById("list").innerHTML;

// document.getElementById("list").innerHTML = test.replace("google", "oichub")

// }

// function submit(){
// const input = document.getElementById('testinput').value

// try {
//   if (x.trim() == "") throw "empty";
//   if (isNaN(x)) throw "not a number";
//   x = Number(x);
//   if (x < 5) throw "too low";
//   if (x > 10) throw "too high";
// } catch (err) {
//   message.innerHTML = "Input is " + err;
// }
// }

// function naming() {
//   const name = "ade"

// }

// console.log(name)

// naming();

// {
//   const x = 2
// }
// console.log(x)

// function wording() {
// const word = "pablo";
// console.log(word)

// }
// wording();

// function copy(){
//   let word = "show us way "
//   console.log(word)
// }

// copy();

// z =5
// console.log(z)
// console.log("new taker")

// x = 5
// var x;
// console.log(x)

// let hello = ""

// hello = (ball) => "hello"+ " " + ball

// console.log(hello("Man U"));

// function ball(club){
//   return "hello" + club
// }

// console.log(ball("chelsea"))

// let hello = ""

// hello = (a, b, c) => "hello"+ " " + a

// console.log(hello( 5 * 7 + 4));

// const date = new Date();
// const getyear = date.getFullYear();
// console.log(getyear);

// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const obj = JSON.parse(text);
// console.log(obj)

// console.log(obj.employees[1].firstName);

// const create = document.createElement("button");
// console.log(create)
// create.write="pabo"
// document.write(Date());
// const list = document.getElementById("list").innerHTML=create

// console.log(text);

//  localStorage.setItem("name", "John Doe")

// const getItem = localStorage.getItem("name");

// const removeItem = localStorage.removeItem("name")
// console.log(removeItem);

// let func;
// func = (id) => {
//   const input = document.getElementById("testinput").value;
//   let names = [`${input}`];
//   names.push(id);

//   localStorage.setItem("name", JSON.stringify(names));
// };

// var items = ["ade", 22];

// function store(item_id) {
//     items.push(item_id);
//     localStorage.setItem("item", JSON.stringify(items));
// }

// console.log(store())

let file = "txt.txt";

fetch(file)
  .then((x) => x.text())
  .then((y) => (document.getElementById("list").innerHTML = y));

let result = "";
let goods = document.getElementById("showProducts");
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.products.length; i++) {
      result += `
        <p>${data.products[i].brand}</p>
        <p>${data.products[i].price}</p>
        <img src="${data.products[i].images[0]}" alt="">
        
     
    
    
    
    `;
    }
    goods.innerHTML = result;
    console.log("result is here: ", result);
  });
