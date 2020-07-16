// Map---->Is a Function that help yo iterate over the data 
// > The result that comes as a return is in the array datatype and the length is that of the input data

// Filter-----> Help to filter out the values
// > Return type of map is array and it can be or cannot of same length
// > Filter only return those value for which output is true




var a = [7, 4, 26, 8, 12, 5]
a.map((data) => { return data * 3 })
[21, 12, 78, 24, 36, 15]

var b = [1, 63, 25, 69, 12, 41, 28]
b.filter((data) => { return data > 35 })
[63, 69, 41]

//--map with filter
b.map((data) => { return data > 35 })
[false, true, false, true, false, true, false]

