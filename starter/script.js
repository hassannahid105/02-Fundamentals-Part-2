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
