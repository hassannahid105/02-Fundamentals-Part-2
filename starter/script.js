"use strict";
function logger() {
  console.log("My name is Nahid");
}

//calling, running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const Juice = `Juice with ${apples} and ${oranges} oranges.`;
  return Juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//
var greet = function (name) {
  console.log("Hello, " + name + "!");
};
greet("John"); // Output: Hello, John!

// function declaration

function retrierment(birthyear) {
  const retriermentLeft = 2037 - birthyear;
  return 65 - retriermentLeft;
}

console.log(retrierment(1993));
console.log(retrierment(2000));

// function expression
const retrierment1 = function (birthyeah) {
  const retriermentLeft = 2037 - birthyeah;
  return 65 - retriermentLeft;
};
console.log(retrierment1(1979));

// arrow function

const retrierment2 = (birthyeah) => {
  const retriermentLeft = 2037 - birthyeah;
  return 65 - retriermentLeft;
};
console.log(retrierment2(1990));
/////   ```javascript
function furit(pice) {
  return 4 * pice;
}

function fruitpos(apple, oranges) {
  const applePice = furit(apple);
  const orangespice = furit(oranges);
  const Juice = `${applePice} ${orangespice}`;
  return Juice;
}

console.log(fruitpos(4, 6));
/*
echo "# 02-Fundamentals-Part-2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hassannahid105/02-Fundamentals-Part-2.git
git push -u origin main
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hassannahid105/02-Fundamentals-Part-2.git
git push -u origin main */
// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

const calcAverage = (first, second, third) => (first + second + third) / 3;
console.log(calcAverage(9, 5, 6));
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Kolas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team win......`);
  }
};

// test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

//
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array total containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const tip = calcTip(100);
console.log(`today tip ${tip}`);

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(tips);
// BONUS: Create an array total containing the total values, so the bill + tip.
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(total);

//42.
const nahid = {
  firstName: "Nahid",
  lastName: "Hassan",
  age: 2043 - 2000,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
  hasdrivingLicense: true,
  calcAge1: function (birthyear) {
    return 2037 - birthyear;
  },
  str: function () {
    if (this.hasdrivingLicense) {
      return `${this.firstName} is a ${this.age}-years old teacher, and he has driver license`;
    }
  },
};

console.log(nahid.firstName);
console.log(nahid["firstName"]);
const nameKey = "Name";
console.log(nahid[`first${nameKey}`]);
console.log(nahid[`last${nameKey}`]);

// const interestedIn = prompt(
//   "what do you want to know about nahid? Choose between firstName, lastName, age, job, and friends"
// );

const interestedIn = "job";
if (nahid[interestedIn]) {
  console.log(nahid[interestedIn]);
} else {
  console.log("wrong request");
}
//
const retriveEle = `${nahid.firstName} has ${nahid.friends.length} friends, and his best friends is called ${nahid.friends[0]}`;
console.log(retriveEle);

const myBirthyera = 2000;
console.log(nahid.calcAge1(1990));
console.log(nahid["calcAge1"](1990));
console.log(nahid["calcAge1"](myBirthyera));

const get = nahid.str();
console.log(get);
