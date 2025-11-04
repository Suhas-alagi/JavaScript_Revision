//
let name="suhas"

console.log(name)

let name2='suhas'
console.log(name2)

let phrase=`hello ${name}`  //value of name variable
console.log(phrase)

let multiLine=`this is line1
this is line2`
console.log(multiLine)  


//string methods

let str="  Hello World  "
console.log(str.length)  //length of string
console.log(str.trim())  //removes spaces from start and end
console.log(str.toUpperCase())  //converts to uppercase
console.log(str.toLowerCase())  //converts to lowercase
console.log(str.indexOf("o"))  //first occurrence of 'o'
console.log(str.lastIndexOf("o"))  //last occurrence of 'o'
console.log(str.slice(2,7))  //extracts substring from index 2 to 6
console.log(str.replace("World","There"))  //replaces 'World' with 'There'
console.log(str.split(" "))  //splits string into array by spaces
console.log(str.includes("Hello"))  //checks if 'Hello' is in the string
console.log(str.startsWith("  He"))  //checks if string starts with '  He'
console.log(str.endsWith("ld  "))  //checks if string ends with 'ld  '
console.log(str.repeat(2))  //repeats the string 2 times
console.log(str.charAt(4))  //character at index 4
console.log(str.charCodeAt(4))  //ASCII code of character at index 4
//substing
console.log(str.substring(2,7))  //extracts substring from index 2 to 6
console.log(str.concat("!!!"))  //concatenates '!!!' to the string

//... and many more methods available

