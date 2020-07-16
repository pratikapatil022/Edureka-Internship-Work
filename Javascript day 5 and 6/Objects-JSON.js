//Object

var movies = {
    name: 'Superman',
    rating: 4.5,
    genre: 'Action'
}
undefined
movies
{ name: "Superman", rating: 4.5, genre: "Action" }
typeof (movies)
"object"
movies.name
"Superman"
movies.rating
4.5
movies.langauge = "English"
"English"
movies
{ name: "Superman", rating: 4.5, genre: "Action", langauge: "English" }
movies.rating = 4.3
4.3
movies
{ name: "Superman", rating: 4.3, genre: "Action", langauge: "English" }
delete movies.genre
true

movies['genre']
"Action"

//JSON///> javascript Object notation
var movies = [
    {
        name: 'MadMax',
        rating: 4.5,
        genre: 'Action'
    },
    {
        name: 'Avengers',
        rating: 3.5,
        genre: 'thril'
    }
]
movies[1].name
"Avengers"

var calcThatShit = {
    name: 'Calc',
    add: function (a, b) { return a + b },
    sub: (a, b) => { return a - b }
}
undefined
calcThatShit
{ name: "Calc", add: ƒ, sub: ƒ }
calcThatShit.add(2, 4)
6
calcThatShit.add(4, 55)
59
calcThatShit.sub(4, 55)
    - 51

//The Following is similar to the ones at the top 
//Just a bunch of Methods that can be called just like you do 
//With properties in Objects
//To call the javascript variable just use the backticks
var dbquery = {
    find: (table) => { return `Select * for ${table}` },
    insert: (table, dbobj) => { return `Insert into ${table} name,city VALUES(${dbobj.name},${dbobj.city})` }
}


dbquery.find('Employee')
"Select * for Employee"
dbquery.insert('student', { name: 'John', city: 'Delhi' })
"Insert into student name,city VALUES(John,Delhi)"

//Here firstname is a global variable defined before thus the result of the console.log()
//will have the global variable and not the one defined inside the object
// To get the firstname defined inside the object following should have been within the backticks
// `${this.firstname}` 
var firstname = "Michal"
var lastname = "Zoe"

var sayhi = {
    firstname: "John",
    lastname: 'Ammy',
    greet: function () {
        return `Say hi to ${firstname} ${this.lastname}`
    }
}

console.log(sayhi.greet())
