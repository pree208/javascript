let val;

//number to string //use string function

val = String(555);
val = String(4 + 4);

//boolean to string
val = String(true);

//date to string
val = String(new Date());

//array to string
val = String([1, 2, 3, 4]);

//toString() method
val = (5).toString();
val = (true).toString();

//console.log(val);
//console.log(typeof val);
//console.log(val.length);


//string to number

val = Number('5');

//bool to number
val = Number(true);//1

val = Number(false);//0

//null to number
val = Number(null);

//string to number
val = Number('hello');

//array to number
val = Number([1, 2, 3, 4]);

val = parseInt('100.35');
val = parseFloat('100.35');
//console.log(val);
//console.log(typeof val);
//console.log(val.toFixed(2));

const val1 = 5;
const val2 = 7;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

