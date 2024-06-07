// //Only the main and one file is run and other files are linked to it!

// const notes = require('./notes.js');
// console.log('server file is available');

// var age = notes.age;
// // var result = notes.addNumber(age+18); ->> this results NaN which means not a number because it is a single argument

// var result = notes.addNumber(age+18,10);
// console.log(age);
// console.log('result is now ' + result);

const notes = require('./notes.js');
var _ = require('lodash');//we ca give variable name anything but just use _ for it.It's just a convention. Like we always use x in mathematics.let x = .....

console.log('server file is available');
var age = notes.age;
// var result = notes.addNumber(age+18); ->> this results NaN which means not a number because it is a single argument
var result = notes.addNumber(age+18,10);
console.log(age);
console.log('result is now ' + result);

var data = ["person","person",1,2,1,2,'name','age','2'];
//lodash has many inbuilt functions which is very helpful
var filter = _.uniq(data);// inbuilt function to find out unique data
console.log(filter);

console.log(_.isString('prince'));//returns true if inside thing is true
console.log(_.isString(3));
console.log(_.isString(true));
console.log(_.isString(false));

