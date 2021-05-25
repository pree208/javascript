//var let const...in modern browser const works finely

//var
/*var name = "pree";
console.log(name);
name = "san";
console.log(name);

//init variable
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

//variable name can be letters,numbers,_,$
//it cannot start with numbers
var $name = "preethosh";
console.log($name);

//multi word variables
var firstName = "ashok";//camel case
var first_name = "gom";//underscore
var FirstName = "ash";//pascal case
var firstname; */

//let works same as var
/*let name;
name = "pree";
console.log(name);
name = "san";
console.log(name);*/

// CONST

//const name = "pree";
//console.log(name);

//cannot reassign
//name = "saara";
//have to assign a value otherwise it dont works
//const greeting;//this wont works
// in const it can be reassigned in object or array. 
const person = {
  name: 'pree',
  age: 18
}

person.name = "preethi";
person.age = 25;

//console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6, 7);
console.log(numbers);






