var a = 10
var b = 20
a + b
///
function
    methods
arrow function
    IFFI
generator
///

function add(a, b) {
    return a + b
}

add(2, 4)
6
add(2, 499)
501
add('a', 'b')
"ab"

function isEven(userinput) {
    var out;
    if (userinput % 2 === 0) {
        out = `Number ${userinput} is even`
    } else {
        out = `Number ${userinput} is odd`
    }
    return out
}

isEven(10)
"Number 10 is even"
isEven(11)
"Number 11 is odd"

////////////Method///////

var add = function (a, b) {
    return a + b
}

add(2, 3)
5

////////////arrow es6///////
let add = (a, b) => { return a + b }
add(2, 3)
5