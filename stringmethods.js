const firstName = "Pree";
const secondName = "thi";
const age = 20;
str = "my name is pree.";
const tags = 'web design,web dev,programming';

let val;

val = firstName + secondName;

//concatenation
val = firstName + '  ' + secondName;

//append
val = "brad ";
val += "Traversy";

val = 'hello i am' + firstName + 'and I am ' + age;


//ESCAPING
val = 'that\'s awesome I can\'t wait'; //use backslash before ' in single quotes sentence

//length
val = firstName.length;

//concat
val = firstName.concat(' ', secondName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//position
val = firstName[0];


//indexof()
val = firstName.indexOf('r');
val = firstName.lastIndexOf('e');

//charAt()
val = firstName.charAt('2');
//get last char
val = firstName.charAt(firstName.length - 1);

//substring
val = firstName.substring(0, 3);

//slice
val = firstName.substring(-2, 1);//can give negative position


//split
val = str.split(' ');
val = tags.split(',');

//replace
val = str.replace('pree', 'priya');

//includes
val = str.includes('my');
console.log(val);