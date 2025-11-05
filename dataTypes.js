//objects

// let obj={
//     name:"suhas",
//     age:23,
//     city:"bangalore",
//     weight:70
// };
// console.log(obj); //print the complete object

// console.log("Name is: " + obj.name); //accessing object properties
// console.log("Age is: " + obj.age);   //accessing object properties
// console.log("City is: " + obj.city);
// console.log("Weight is: " + obj.weight);

//object with method

// let obj={
//     name:"suhas",
//     age:23,
//     city:"bangalore",
//     weight:70,

//     greet:function(){
//         console.log("Hello, my name is " + this.name);
//     }

// };

// obj.greet() //calling methods of object


// console.log(obj) //calling whole object


// //shallow copy vs deep copy

// let obj2=obj; //shallow copy
// obj2.name="rahul"; //modifying obj2 also modifies obj
// console.log("obj name: " + obj.name); //rahul
// console.log("obj2 name: " + obj2.name); //rahul



//Arrays
//collection of items or elements


//array sytax

// let arr=[10,20,30,40,50]; //array of numbers
// console.log(arr); //print whole array
// console.log("First element: " + arr[0]); //accessing first element
// console.log("Third element: " + arr[2]); //accessing third element

// //modifying array elements
// arr[1]=25; //changing second element
// console.log("Modified array: " + arr); //print modified array

// //array of elements of different data types

// let arr2=[ "suhas", 23, true, 5.9 ];
// console.log(arr2);
// console.log("Name: " + arr2[0]); //accessing first element
// console.log("Age: " + arr2[1]); //accessing second element


// let arr3=[3,5,6]
// console.log(arr3)


//Array Constructors

let arr = new Array(1,2,3,4,5); //array using constructor
console.log(arr); //print whole array

console.log(typeof arr); //object

//Array Built-in Methods

let fruits = ["apple", "banana", "cherry"];
console.log("Fruits: " + fruits); //print whole array

//push method
fruits.push("date"); //adding element at the end
console.log("After push: " + fruits); //print modified array

//pop method
let removedFruit = fruits.pop(); //removing last element
console.log("Removed fruit: " + removedFruit); //print removed element
console.log("After pop: " + fruits); //print modified array
//length property
console.log("Number of fruits: " + fruits.length); //print length of array  
//indexOf method
let index = fruits.indexOf("banana"); //finding index of an element
console.log("Index of banana: " + index); //print index
//splice method
fruits.splice(1, 1); //removing element at index 1
console.log("After splice: " + fruits); //print modified array
//slice method
let citrus = fruits.slice(0, 1); //creating a new array from index 0 to 1
console.log("Citrus fruits: " + citrus); //print new array
