// Ways of iterating over a array in JavaScript
// 04-01-2023

// No-> 1 For Loop
// i = 1;
// sArray = [1,2,3];

// for(i; i < sArray.length; i++){
//     go(i);
// }

// function go(i){
//     setTimeout(function(){
//         console.log('Hey..forLoop...'+i);
//     }, 1000 * i);
// }

// No-> 2 = While loop
// num = 0;
// sArray = [1,2,3,4,5];

// while(num < sArray.length){
//     chunk(num);
//     num++;
// }

// function chunk(num){
//     setTimeout(function(){
//         console.log('Hey....'+num)
//     }, 1000  * num)
// }

// No-> 3 
// The arr.forEach() method calls the provided function once for each element of the array. 
//The provided function may perform any kind of operation on the elements of the given array. 

// num = 0;
// sArray = [1,2,3,4,5];

// sArray.forEach(funChunk);

// function funChunk(item,ind){
//     console.log(item); 
// }

// function funChunk(item){
//     setTimeout(function(){
//         console.log('Done It....'+item);
//     }, 1000 * item)
// }

// No-> 4  
// The Javascript Array.every() method considers all the elements of an array and then further checks that whether 
// all the elements of the array satisfy the given condition (passed by in user) or not 
// that is provided by a method passed to it as the argument.

// No-> 5.
//  reduce() Method: It is used to reduce the array into one single value using some functional logic
// sArray = [3,4,6,7,9];
// const helperSum = (acc,curr) => (acc+curr);
// let sum = sArray.reduce(helperSum,0)
// console.log(sArray)
// console.log(sum)

// No-> 6. 
// arr.some() method checks whether at least one of the elements 
// of the array satisfies the condition checked by the argument method. 

// sArray = [2,3,1,4,6,5,7]
// const checkValue = (checkVal) => checkVal > 10;
// const maybe = sArray.some(checkValue);
// console.log(maybe);
// if(maybe == true){
//     console.log('Yes It has');
// }else{
//     console.log('Oops! It Does not have');
// }

// Ignore loop in else condition
// let i = 1;
// for(i; i<=15; i++){
//     // skips the iteration(Continue) or // out of the for a loop(Break)
//     if(i == 9){
//       //  continue;
//       break;
//     }
//     console.log('Continue '+ i);
// }

// -> Array push() it add new array element in end of current array.
// -> Array pop() it remove last array element from current array.
// -> Array shift() it remove first array element from current array.
// -> Array unshift() it add first array element from current array.

/* 
-> The try statement lets you test a block of code to check for errors.
-> The catch statement lets you handle the error if any are present.
-> The throw statement lets you make your own errors.
-> The finally statement lets you execute code, after try and catch.  
-> The finally block runs regardless of the result of the try-catch block.

Javascript arrays have built-in methods:

sArray.sort()   // This method sorts the array
sArray.length   // This method returns the number of elements

*/


