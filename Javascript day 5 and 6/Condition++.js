//Meaning of if else and elsif statments and its use

if (condition) {
    //do something
} else {
    //do something
}

var a = 10
if (a % 2 == 0) {
    console.log("Number is even")
} else {
    console.log("Number is odd")
}

//--> Result would be "Number is even"

// Values that are truthy are encountered as true in Boolean context
// Values that are falsy are encountered as false in Boolean context
truthy > expect 0,,,,,,,,, 1, 2, 3, -1, -2, true, 'dfvf'
flasy > 0, false, null, undefined

//Note - > Null can be assigned to a variable but undefiend is a result
// of nit being assigned a value

// Note --> condition ? if condition is true : if condition is false

var a = 10

a > 10 ? "hiii" : "bie"

"bie"
var a = 10

a == 10 ? "hiii" : "bie"

"hiii"
//---------------------------------------------------------------
//using Date()

Date()
"Sat Jul 11 2020 12:48:11 GMT+0530 (India Standard Time)"

var mydate = new Date()
undefined
mydate
Sat Jul 11 2020 12: 49: 04 GMT + 0530(India Standard Time)
mydate.getDate()
11
mydate.getMonth()
6
mydate.getFullYear()
2020
mydate.getDay()
6

//If we have one condition and multiple output go with switch
//If multiple condition multiple output use IFELSE


var name = "John"
switch (name) {
    case 'Aakash':
        console.log('You are user')
        break;
    case 'Alvin':
        console.log('You are Admin')
        break;
    case 'John':
        console.log('You are Super Admin')
        break;
    default:
        console.log('I Dont know you')
}

var a = 10
switch (a % 2) {
    case 0:
        console.log('Number is even')
        break;
    default:
        console.log('Number is odd')
}


switch (mydate.getDay()) {
    case 1:
        console.log("Today is monday")
        break;
    case 2:
        console.log("Today is tuesday")
        break;
    case 5:
        console.log("Today is friday ")
        break;
    default:
        console.log("Wrong input give me the right one you little shit!!")
}
