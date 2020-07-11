var superman = 10;
superman
"10"

types of datatypes
Strings = "Pratik" 'Batman' '24ssd'
Number = 225, 3666
Boolean = true / false

//To find out the type of data
typeof (varName)
Saving this to a variable will later give that var the name of the datatype


Math operations
var a = 10
var b = 20
a + b
30

a - b
    - 10

a * b
200

a / b
0.5

4 % 2
0

3 % 2
1

2 % 3
2

Note----Strings can only bbe concatenated(The only math operation that works on strings)

// The following sequence is understandable on its own 
// It basically means that string and integers can not be concatenated 
// But an integer can be substracted from a string

10 + '10' + 10 - 1
101009
10 + 10 + '10' - 1
2009
'10' + 10 + 10 - 1
101009

//If a variable is given the value true its immidiate numerical value is 1
//Hence the following is possible--
var a = true
undefined
var b = 5
undefined
a - b
    - 4
var c = "hi"
undefined
a - c
NaN
a - b - c
NaN
a - b + c
"-4hi"