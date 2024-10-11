/*
    Hi.
    This is a set of practice exercises.
    The purpose is to train on a few things at a time.
    You do this by entering your answer after a task is given (see the example).

    DO NOT change any code given, unless the task specifically says to do so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
  let person = people[index];
  console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A

    1. Declare a variable to store the following values 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
    2. Declare a variable to keep the sum of the numbers from step 1.
    3. Use a for or while loop to sum the numbers from step 1 to the variable from step 2
    4. Make a generic function for step 3.
    
*/

console.log("Task: A");

//1.

const valueStorage = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

console.log(valueStorage);

//2.

let sum = 0;
console.log(sum);

//3.

for (let i = 0; i < valueStorage.length; i++) {
  sum += valueStorage[i];
}

console.log(sum);

//4.

function sumListOfNumbers() {
  let sum = 0;
  for (let i = 0; i < sumListOfNumbers.length; i++) {
    sum += sumListOfNumbers[i];

    return sum;
  }

  console.log(sumListOfNumbers(valueStorage));
}

/* -----------------------------------------------------------------------------
    Task: B

    1. Use a for loop to find the position of 'raspberry' in the list of fruits.
    2. Create a generic function that can find the position of anny fruit in the list. 
*/
console.log("Task: B");

const fruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "mango",
  "pineapple",
  "pear",
  "peach",
  "plum",
  "watermelon",
  "blueberry",
  "raspberry",
  "blackberry",
  "strawberry",
  "cherry",
  "lemon",
  "lime",
  "pomegranate",
  "apricot",
];

//1.

const locateFruit = "raspberry";

const fruitPosition = -1;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === locateFruit) {
    fruitPosition = i;

    break;
  }
}

if (fruitPosition !== -1) {
  console.log(`The fruit ${locateFruit} is found at index ${fruitPosition}.`);
} else {
  console.log(`The fruit ${locateFruit} is not found in the list of fruits.`);
}

//2.

function findFruitPosition(array, fruitToFind) {
  for (let i = 0; i < findFruitPosition.length; i++) {
    if (array[i] == fruitToFind) {
      return i;
    }
    return -1;
  }
}

if (fruitPosition !== -1) {
  console.log(`The fruit ${locateFruit} is found at index ${fruitPosition}.`);
} else {
  console.log(`The fruit ${locateFruit} is not found in the list of fruits.`);
}
/* -----------------------------------------------------------------------------
    Task: C

    1. Declare a new variable to store fruits that start with the letter 'b'.
    2. Use a for or while loop to copy over all fruits starting with 'b' to your new variable (the one you declared in point 1).
    3. Print the number of fruits that start with 'b' (hint: it will be the length of the list from point 2).
*/
console.log("Task: C");

//1.

const letterBFruits = ["banana", "blueberry", "blackberry"];
console.log(letterBFruits);

//2.

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i][0].toLowerCase() == "b") {
    letterBFruits.push(fruits[i]);
  }
}
console.log(letterBFruits);

//3.

console.log(letterBFruits.length);

/* -----------------------------------------------------------------------------
    Task: D
    * Write the code to find the number of fruits in the list that have a name longer than 8 characters.
    * Print the count.
*/
console.log("Task: D");

let fruitCount = 0;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].length > 8) {
    count++;
  }
}

console.log(
  `The total number of fruit names more than 8 letters are: ${fruitCount}`
);

/* -----------------------------------------------------------------------------
    Task: E
    
    Use loops (for or while) to prove that list A and list B contain exactly the same items.
*/
console.log("Task: E");

const A = [1, 4, 5, "Bananas", true, 3.14, 9.81];
const B = [1, 3.14, 5, 9.81, true, 4, "Bananas"];

const sortedAList = A.slice().sort();
const sortedBList = B.slice().sort();

function checkForEqualLists(A, B) {
  if (A.length !== B.length) {
    return false;
  }
  for (i = 0; i < sortedAList.length; i++) {
    if (sortedAList[i] !== sortedBList[i]) {
      return false;
    }
  }

  return true;
}

console.log(checkForEqualLists(A, B));
