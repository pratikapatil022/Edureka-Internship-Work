// Convert the string to Uppercase and Lowercase
var city = "London"
city.toUpperCase(city)
"LONDON"

same with 
city.toLowerCase(city)
"london"

//Every seperate character in a datatype is given an indexing as a character
// The indexing number starts with 0 and goes all the way upto the lneght of the datatype

city.length()-- > Gives you the length of the datatype
"6"
city[1]
"o"

// The .slice() property is used to slice certain characters from the string using their index numbers

city.slice(0)
"ondon"

city.slice(1, 3)
"on"
//similarly with the the negative indexing just use your brain

//The .charAt() property is to pinpoint a specific character at a particular index number.
//.trim() gets rid of all the spaces from the string

//.replace() is used to replace a certain character in the string
var ultraman = "My Powers are only finite my child"

ultraman.replace('finite', 'infinite');
"My Powers are only infinte my child"

//Or you can do this to include multiple characters
ultraman.replace(/my/g, 'infinite');

"My Powers are only finite infinite my child"
----------------------------------------------------------------
    //Here are a bunch of Math operations 
    Math.random()
0.8491852702066687

Math.random()
0.8491852702066687
Math.random() * 10
9.19414495421229
Math.random() * 100000
63975.09353202606
Math.random() * 1000000
972329.466056284

Math.floor(10.1)
10
Math.floor(10.4)
10
Math.floor(10.5)
10
Math.floor(10.9)
10

Math.ceil(10.1)
11
Math.ceil(10.4)
11
Math.ceil(10.5)
11
Math.ceil(10.9)
11

Math.round(10.1)
10
Math.round(10.4)
10
Math.round(10.5)
11
Math.round(10.9)
11

Math.random() * 1000000
300347.2100637101
Math.floor(Math.random() * 1000000)
300829
Math.ceil(Math.random() * 1000000)
530073
Math.round(Math.random() * 1000000)
831151

Math.floor(Math.random() * (max - min)) + min

Math.floor(Math.random() * (20 - 10)) + 10
13
Math.floor(Math.random() * (20 - 10)) + 10
10
Math.floor(Math.random() * (20 - 10)) + 10
18

Math.PI
3.141592653589793
Math.PI.toFixed(3)
"3.142"
Math.PI.toFixed(4)
"3.1416"

Math.E
2.718281828459045
Math.pow(2, 2)
4
Math.pow(2, 3)
8
Math.log(10)
2.302585092994046
Math.log(0)
    - Infinity
Math.log(1)
0
Math.cos(10)
    - 0.8390715290764524