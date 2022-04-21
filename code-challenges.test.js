// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("divBy3", () => {
  it("returns if the number is divisible by three", () => {
    expect(divBy3(15)).toEqual("15 is divisible by three"),
    expect(divBy3(0)).toEqual("0 is divisible by three"),
    expect(divBy3(-7)).toEqual("-7 is not divisible by three")
  })
})
// ● divBy3 › returns if the number is divisible by three
//
//    ReferenceError: divBy3 is not defined
const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.
// Pseudo Code:
// Create a function called divBy3
// Make a parameters called num
// Make a conditional statement
// Have the conditional be a modulo
//return each statement with string interpulation
const divBy3 = (num) => {
  if (num % 3 === 0){
    return `${num} is divisible by three`
  } else {
    return `${num} is not divisible by three`
  }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("randomNouns", () => {
  it("returns nouns with the first letter capitalized", () => {
    expect(capitalWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
// ReferenceError: randomNouns is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.
// Pseudo Code:
//Create a function with randomNouns as the name
// the function is going to have arrays
// Use the .join method to turn the array into a string
// It's going to utilize the method .toUpperCase
// Return with the .split to change the strings back to arrays

const capitalWords = (array) => {
  let upperCase = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
  return upperCase
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("vowelIndex", () => {
  it("returns index of the first vowel in a string", () => {
    expect(firstVowel("learn")).toEqual(1)
    expect(firstVowel("academy")).toEqual(0)
    expect(firstVowel("challenges")).toEqual(2)
  })
})
// ● vowelIndex › returns index of the first vowel in a string
//
//   ReferenceError: vowelIndex is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
// Pseudo Code:
// Create a function called firstVowel
// Use the indexOf method (Didn't work)
// Have it return the relevent values (Didn't work)
// Create a iteration for the strings to run through
// Using the || operators to get through each vowel

const firstVowel = (string) => {
  for (i=0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u')
    return string.indexOf(string[i])
  }
}





// const firstVowel = (string) => {
//   return vowelTester1.indexOf("e")
//   return vowelTester2.indexOf("a")
//   return vowelTester3.indexOf("a")
// }
