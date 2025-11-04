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

let obj={
    name:"suhas",
    age:23,
    city:"bangalore",
    weight:70,

    greet:function(){
        console.log("Hello, my name is " + this.name);
    }

};

obj.greet() //calling methods of object


console.log(obj) //calling whole object

