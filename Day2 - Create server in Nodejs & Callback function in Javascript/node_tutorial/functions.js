//Previous name of this file was server.js

/* * Many ways to create a function in javascript * */

//console.log('server file is running');

/* Way 1 to write a function in javascript */
// function add(a,b){
//     return a+b;
// }


/* Way 2 to write a function in javascript */
// var add = function(a,b){
//     return a+b;
// }

/* Way 3 to write a function in javascript */
// var add = (a,b) => {return a+b};

/* Way 4 to write a function in javascript */

// var add = (a,b) => a+b;
// var result = add(6,1);
// console.log(result);

// (function(){
//     console.log('prince is added');
// })();

/* * * Call Back function below * * */

// function callback(){
//     console.log('prince is calling a callback function');
// }

// const add = function(a,b,callback){
//     var result = a+b;
//     console.log('result : ' + result); //This is main function
//     callback();
// }

// add(3,4,callback);


/* ANOTHER WAY */

const add = function(a,b,prince){
    var result = a+b;
    console.log('result : ' + result);
    prince();
}

// add(2,3,function(){
//     console.log('add complete');
// });

add(2,4,() => console.log(`add completed`));