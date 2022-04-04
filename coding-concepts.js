// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer:["B", "r", "a", "v", "o", " ", "2", "0", "2", "2"]
// b) Verify and explain: The .split method takes the string and separates each individual letter, places them in an array, and adds quotes around the letters.
// [
//   'B', 'r', 'a', 'v',
//   'o', ' ', '2', '0',
//   '2', '2'
// ]



// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:`Hello, LEARN Student!`
// b) Verify and explain: undefined. I don't know why it's returning as undefined.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:[ 8, 10, 12, 14, 16 ] The .map method combined the values of the function together, then the * operator multipled the two.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:[ 11, 13, 15 ] The .filter method will remove values from a specified data type. In the this case it filtered out all the even numbers from the array


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: JavaScript. It logged the key word "languages" from myCodingSkills and returned the index of the array


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: student: "George", cohort: "Bravo", year: 2022
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 } It logged everything in the class starting with this.student, this.cohort, and this.year. The reason it logged "George" instead of name is because "name" was given a parameter, and "George" is the argument calling to it. So this.student is dynamic in depending on the information passed to it.
