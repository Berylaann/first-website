// Import all modules
import brushTeeth from "./modules/brushTeeth.js";
import closeEyes from "./modules/closeEyes.js";
import getIntoBed from "./modules/getIntoBed.js";
import putOnClothes from "./modules/putOnClothes.js";
import skincare from "./modules/skincare.js";
import sleep from "./modules/sleep.js";
import sortOutHair from "./modules/sortOutHair.js";
import turnOffLights from "./modules/turnOffLights.js";


console.log("I am testing out the console");

var firstName = "Beryl Ann"; // declaring a variable

firstName = "Rayyan"; // reassigning a variable

const a = 85;
let b = 15;
let c = a + b;

console.log(c);
b = 25;
c = a + b;
console.log(c);

/*
var $firstName;

var first_name;

var name1;
var name2;
var _first_name;

$firstName = "Lorraine";
*/

// creating a function
function sayHey() {
    console.log("Hey")
}

sayHey(); // call the function

function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodnight!");
}

conversation();

// function with parameter
function greeting(name) {
    console.log("Hello " + name + "!");
}

greeting("Sakirat");
greeting("Varlene");
greeting("Beauty");


function addition(num1, num2) {
    return num1 + num2;
}

addition(1000, -2);
addition(2300, 40000);

let additionOfTwoNumbers = addition(1000, -2); // 998
console.log(additionOfTwoNumbers);

function newConversation(person, topic) {
    console.log("Hey, " + person + "!");
    console.log("How are you?");
    console.log("Do you like" + topic + "?");
}

newConversation("Shakirah", "programming");
newConversation("Varlene", "HTML");

// function expression
const multiply = function(num) {
    return num * num;
    /* working with multiple lines of code inside return statement
    return {
        let total = num * num
    }; */
};

console.log (multiply(2));

// local scope: variables created inside a function only works in the function
// you cannot access the myName variable outside of the function

function testing() {
    const myName = "Beryl Ann";
    console.log(myName)
}

testing()

// this will throw an error because the variable cannot be accessed outside of the function
//console.log(myName);

let age = 12;

age = 30;

console.log(age);

// an immediately-involved function expression
(function () {
// code to execute
console.log("running now")
} ())

// function expression

/* const multiply = function (num) {
    return num * num;
} */

// an arrow function
const multiply2 = (num) => {
    return num * num;
  }
  
  const multiply3 = num => num * num;

  const person = {
    firstName: "Sakirat",
    lastName: "Usman",
    likes: "Pizza",
  };

  // dot notation
  console.log(person.firstName);

  // bracket notation
  console.log(person["lastName"]);

  person.likes = "Shawarma";

  console.log(person)
// Example

const personA = {
    firstName: 'Monique',
    likes: 'pizza'
};

const personB = personA;

console.log("Before");
console.log(personA.firstName);
console.log(personB.firstName);

personA.firstName = "Stacy";

console.log("After");
console.log(personA.firstName);
console.log(personB.firstName);

// Numbers can be integer or decimal values
const pi = 3.14;

console.log("The value of pi: " + pi);

// Boolean values
const codherIsAmazing = true;
const weatherIsGreat = false;

console.log("Is codher amazing? " + codherIsAmazing);
console.log("Is the weather great? " + weatherIsGreat);

// basic maths operators
const x = 6;
const y = 3;
const add = x + y;

console.log("Addition of x and y is: " + add);

const substraction = x - y;
console.log("Substraction of x and y is: " + substraction);

const multiplication = x * y;
console.log("Multiplication of x and y is: " + multiplication);

const division = x / y;
console.log("Division of x and y is: " + division);

const modulus = x % y;
console.log("Remainder of x and y is: " + modulus);

const exponentiation = x ** y;
console.log("Exponentiation of x and y is: " + exponentiation);

let i = 7;
let j = 8;
let k = 9;
let l = 10; 

// increment i first by 1, then assign the incremeneted value of i to preIncrement variable.

const preIncrement = ++i; // 8

// assign the current value of i to the postIncrement variable, then increment i afterwards.
// which means, the next time you use i, i will be 8

const postIncrement = i++; // 7

const preDecrement = --j; // 7

const postDecrement = j--; // 8

console.log("Pre increment of i : " + preIncrement);
console.log("Post increment of j : " + postIncrement);
console.log("Pre decrement of k : " + preDecrement); 
console.log("Post decrement of l : " + postDecrement);

// "===" strict equality operator

const apples = "apples";
const oranges = "oranges";

const isEqual = (apples === oranges)

console.log("Are apples and oranges the same? " + isEqual);

// "==" normal equality operstor (it will only of the values are equal)

const equality = 2 == "2";
console.log(equality);

// check the type of the value, and also check if they have the same values
const strictEquality = 2 === "2";
console.log(strictEquality);

const volunteers = 20;
const students = 24;
const pizzas = 25;

const moreStudents = students > volunteers; // false

const lessStudents = students < pizzas; // true

console.log("Are there more students than volunteers? " + moreStudents);
console.log("Are there fewer students than pizzas? " + lessStudents);

const enoughPizzas = volunteers + students < pizzas;

console.log("Are there enough pizzas for everybody? " + enoughPizzas);

// Create 2 variables, one for your age, and the other for minimum driving age
// Then do a console.log checking whether you are old enough to drive.

// const myAge = 43; 

// const myAge = 43;
// const minimumDrivingAge = 18; 

// const  oldEnoughToDrive = minimumDrivingAge <= myAge // true

// // const youngEnoughToDrive = minimumDrivingAge > myAge // false 

// console.log("Is myAge old enough to drive? " + oldEnoughToDrive); 

// console.log("Is myAge young enough to drive? " + youngEnoughToDrive);

// correction 

const myAge = 38;
const minimumDrivingAge = 16;

const canDrive = myAge >= minimumDrivingAge;

console.log("Can I drive? " + canDrive); 

const iAmAQueen = true;

if (iAmAQueen) {
    console.log ("I am a Queen"); 
}

const personAge = 20;

if (personAge >= 18) {
    console.log("You are allowed on the platform");
} else {
    console.log("You are not allowed on this platform");
}
/*
conditions
? "when the condition is true"
: "the statement you want to run when the condition is false":
*/

personAge >= 18
? console.log("You are allowed on the platform")
: console.log("You are not allowed on this platform");

function getFee(IsMember) {
    return IsMember ? "2.00" : "10.00";
}

console.log(getFee(true));
console.log(getFee(false));

let yourAge = 10

if (yourAge < 13) {
    console.log("You are a child");
} else if (yourAge < 20) {
    console.log("You are a teenager");
} else if (yourAge < 65) {
    console.log("You are an adult");
} else {
    console.log("You are a senior");
}

function calculateShippingFee(totalPurchase) {
    if (totalPurchase < 50) {
        return 10;
    } else if (totalPurchase < 100) {
        return 5;
    }  else {
        return 0;
    }
}
let shippingFee = calculateShippingFee(75);
console.log ("Your shipping fee is: " + shippingFee);

// let totalMarks = 90

// if (totalMarks > 90) {
//     console.log("Grade A+");
// } else if (totalMarks > 80 < 90) {
//     console.log ("Grade A")
// }
//   else if (totalMarks > 70 < 80) {
//     console.log ("Grade B")
// }
//   else if (totalMarks > 60 < 70) {
//     console.log ("Grade C")
// }
//   else if (totalMarks > 50 < 60) {
//     console.log ("Grade C")
// }
//   else (totalMarks > 40 < 50)
// console.log ("Grade E")


function calculateGrade(score) {
    if (score > 90) {
     return "A+";
    } else if (score > 80) {
     return "A";
    } else if (score > 70) {
     return "B";
    } else if (score > 60) {
     return "C";
    } else if (score > 50) {
      return "D";
    } else if (score > 40) {
      return "E";
    } else if (score > 30) {
      return "F";
    } else {
        return "Invalid Score";
    }
}
    const grade = calculateGrade(70);
    console.log("Your grade is: " + grade);

// Switch statement
const currentDay = new Date().getDay();
console.log(currentDay);

switch(currentDay) {
    case 0:
        console.log("Today is Sunday");
        break;

    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;

    case 5:
        console.log("Today is Friday");
        break;

    case 6:
        console.log("Today is Saturday");
        break;

    default:
        console.log("Invalid value");
}

// WHILE LOOP
let increment = 1;
let total = 0;

while (increment <= 10) {
    total = increment;
    increment = increment + 1;
}

console.log("Total no of shoes: " + total);

// random number generator
function randomNumber() {
    return Math.random() + 1;
}

console.log(randomNumber());

// while loop - random number
let count = 1;

while (count <= 10) {
    console.log(randomNumber());
    count = count + 1;
}

// for loop

let totalValue = 0;

for (let i = 1; i <= 10; i++) {
  totalValue = i;
}
console.log("Total no of shoes: " + totalValue);

// for loop - random number
for  (let count = 1; count <= 10; count++) {
console.log(randomNumber());
}

// array

const namesArray = ["Shakirat", "Beryl", "Chantal", "Siwen", "Michaela"];
const personArray = ["Shakirah", "Usman", 22];

namesArray[0] // Shakirah
namesArray[1] // Beryl
namesArray[2] // Chantal
namesArray[3] // Siwen
namesArray[4] // Michaela

console.log(namesArray[3]);

console.log(namesArray.length); // 5

for (let i = 0; i < namesArray.length; i++) {
  console.log(namesArray[i]);
}

// add an element at the end of an array
namesArray.push("Rukiya");

console.log(namesArray);

// adds a new element at the beginning of an array
namesArray.unshift("Beauty");

console.log(namesArray);

// remove an element at the end of an array
namesArray.pop();

console.log(namesArray);

// remove an element at the beginning of an array
namesArray.shift();

console.log(namesArray);

// ordering the elements in an array
namesArray.sort();

console.log(namesArray);

// sorting in descending order
namesArray.sort().reverse();

console.log(namesArray);

// sorting numbers in ascending order
const nums = [1, 5, 3, 19, 2, 10];

nums.sort(); // 1, 10, 19, 2, 3, 5

console.log(nums);

function sortNumberAscending(num1, num2) {
  return num1 - num2;
}

sortNumberAscending(2, 3); // -1
sortNumberAscending(7, 2); // 5

nums.sort(sortNumberAscending);
console.log(nums);

/*
// 1st
[1, 5, 3, 19, 2, 10];

sortNumberAscending(1, 5); // -4: it means the left value is lesser than the right value

// 2nd
[1, 5, 3, 19, 2, 10]

sortNumberAscending(5, 3) // 2: it means the left value is greater than the right value

// 3rd
[1, 3, 5, 19, 2, 10]

sortNumberAscending(5, 19) // -14

// 4th
[1, 3, 5, 19, 2, 10]

sortNumberAscending(19, 2) // 17

// 5th
[1, 3, 5, 2, 19, 10]

sortNumberAscending(19, 10) // 9

// 6th
[1, 3, 5, 2, 10, 19]

// 8th
sortNumberAscending(5, 2) // 3


[1, 3, 2, 5, 10, 19]

sortNumberAscending(3, 2) // 1

[1, 2, 3, 5, 10, 19]

*/

nums.sort(sortNumberAscending).reverse();

console.log(nums);

const fruitAndVeg = [
  "apple",
  "orange",
  "banana",
  "kiwi",
  "avocado",
  "celery",
  "aubergine",
];

let noAvocados = [];

let q = 0;

while (q < fruitAndVeg.length) {
  if (fruitAndVeg[q] !== "avocado") {
    noAvocados.push(fruitAndVeg[q]);
  }

  q++;
  console.log(q);
}

console.log(noAvocados);

const noAvocado = fruitAndVeg.filter((fruit) => !fruit.includes("avocado"));

console.log(noAvocado);

/*
fruitAndVeg.filter(function (fruit) {
  return !fruit.includes("avocado");
});


const filterNonAvocados = (fruit) => !fruit.includes("avocado")
*/

const evenNumbers = [2, 4, 6, 8, 10];

// using for loop and empty to achieve .map method

const evenNumbersDoubled = [];

for (let i = 0; i < evenNumbers.length; i++) {
  let doubled = evenNumbers[i] * 2;
  evenNumbersDoubled.push(doubled);
}

console.log(evenNumbersDoubled);

// working with .map method
const numbersDoubled = evenNumbers.map((num) => num * 2);
console.log(numbersDoubled); // [4, 8, 12, 16, 20]

// chaining methods (using .map and .filter together)
const numbersDoubledAndGreaterThanTen = evenNumbers
  .map((num) => num * 2)
  .filter((num) => num > 10);

console.log(numbersDoubledAndGreaterThanTen); // [12, 16, 20]

function getReadyForBed() {
    brushTeeth();
    skincare();
    putOnClothes();
    sortOutHair();
    turnOffLights();
    getIntoBed();
    closeEyes();
    sleep();
}

getReadyForBed();