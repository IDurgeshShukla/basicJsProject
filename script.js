console.log("hello js");
// var fruits = ['apple','banana','kiwi','guava',112];
//fruits.splice(4,1,'orange');
// fruits.forEach(function(fruit){
//     console.log(fruit)
//     if(fruit== 'banana'){
//         fruits.shift();
//     }
// });
// console.log(fruits.shift());
// let numbers = [-23,12, -17, 19, -20, 0, 1,-12, -5, 5, 20]; 
// let even = numbers.filter(value => value%2==0); console.log(even);

// var students = ['Simran', 'Sakshi', 'Komal', 'Ishita', 'Manya']; var selected = students.slice(-4,-2);
// console.log(selected)

// function f(a,b=1){
//     console.log(a*b);
// }
// let x = undefined;
// let y = f(5,x);

// const obj1 ={
//     first:13,
//     second:20,
//     first:50
// }
// console.log(obj1);

// delete obj1.property1;

// function getInfo(member,year){
//     member.name = 'Suresh';
//     year = 2014;
// }

// const person = 'Sura';
// const birthyear = '1997';

// getInfo(person,birthyear);
// console.log(person,birthyear);

// var student ={
//      firstName : 'mohan',
//      lastName : 'Vikramaditya'
// }
// delete student.firstName;

// console.log(student.firstName +" " +student.lastName)

// var variable;
// function a(){
//     variable = 'inside a';
//     function b(){
//         variable = variable + ' inside b';
//     }
//     b();
// }
// a();
// console.log(variable)

// hoisted();

// var hoisted = function(){

//     console.log('bar');
// };

// array = ['10', '20', '30', '40', '50'];

// const test = function(x){
//     return x<5;
// }
// if(!array.every(test)){
//     console.log('Less than 5');
// }
// else{
//     console.log('Greater than 5')
// }

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3.indexOf(4));
// let x = "10";
// let y = 20;
// let z = x+y;
// console.log(z)

// let str = "hello"
// str[0] = "H"
// console.log(str)

const str = "hello world"
const newStr = str.slice(-5,-1);
console.log(newStr.toUpperCase());


