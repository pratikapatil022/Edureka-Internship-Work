// string literals
// template literals 
//Using backticks in es6 code to make it a lot easier to write string literals
//es6


var moviesnme = "Avengers"
var movierating = 4.5
var movielangugae = "English"

var output = "I am watching movies " + moviesnme + " whose rating is " + movierating + " and language is " + movielangugae + "."

var output = `I am watching movies ${moviesnme} whose rating is ${movierating} and language is ${movielangugae}.`

//---------------------------------------------------------------------------------------
//Understanding the use of var let and const based on the concept of redeclaration and reassigning

// var > we an redeclare and reassign
// let > we cannot redeclare but can reassign
// const > we cannot redeclare nor reassign 