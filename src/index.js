"use strict"
// const a = 10;
// console.log("a", a);


// Переменные
// const age = 20;
// const number = 5.8;


//2.2. String
// const name = "Mango";
// const onByte = "a";


// 2.3. Boolean
// const isAuthenticated = true;
// const canMerge = false;
// const hasChildren = true;
// const isModalOpen = false;





// 2.4. null
// Переменная guest пуста и лишена значения
// let obj = null;
// console.log(typeof null);
// obj = {};
// console.log(obj === null);

// obj = null;
// console.log(obj === null);



// 2.6. Оператор typeof

// if (typeof a === "undefined") {  //возвращает строку
//     console.log("A is Undefined");
// };




//2. Вывод данных
// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!

// const name = "Mango";
// console.log("My name is:", name); // My name is: Mango
// alert(message);



//Остаток от деления
// console.log(13 / 5);//2.6
// console.log(13 % 5);
// console.log(2 % 2);
// console.log(3 % 2);



// for (let i = 0; i < 10; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i, 'chetnoe')
//     } else {
//         console.log(i, 'ne chetnoe')
//     }
// };


//Основные операторы
// let x = 1; 
// console.log(x);
// x = x + 1;
// console.log(x);
// x += 1; //x = x + 1;
// console.log(x);
// x++; //x = x + 1;
// console.log(x);
// //Сложность ++
// console.log(x++); //4
// console.log(x); //5
// console.log(++x); //6


// Создадим цикл while do...
// let x = 1;
// while (x <= 10) {
//     console.log(x++);
//     // x += 1
// }

// >, <, >=, <=, != ЗАПОМНИТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const x = 5;
// if (x) {
//     console.log('Hurray! - NUMBER');
// }

// const text = '0';
// if (text) {
//     console.log('Hurray! - TEXT!')
// }


//EXAMPLE
// const x = 0;
// const y = 15;

//  true --> true
// if (x < 0 && y > 0) {
//     console.log('true');
// }
// //  false --> true
// if (x < 0 || y > 0) {
//   console.log("second true");
// }

//Аналог
// console.log(x > 0 ? x : y);
// console.log(x || y);

//Задача
// const a = 'tttt';
// const b = 'hghgh';
// console.log(a || b);

//Посчитать сумму чисел
// const x = 1234567;
// const text = String(x);
// console.log(text);
// let sum = 0;
// for (let i = 0; i < text.length; i += 1) {
//     // console.log(text[i]) // нам нужно число, а не текст
//     const num = Number(text[i]);
//     // console.log(num);
//     sum += num;
// }
// console.log(sum);



//Посчитать сумму чисел
// const x = 11111;



// function getSum(x) {
//     const text = String(x);
//     let sum = 0;
//     for (let i = 0; i < text.length; i += 1) {
//         // console.log(text[i]) // нам нужно число, а не текст
//         const num = Number(text[i]);
//         // console.log(num);
//         sum += num;
//     }
//   return sum;

// }
// console.log(getSum(11111));
// console.log(getSum(1234567));


//  Шаблонные строки и интерполяция
// const name = "Bobby";
// console.log(`Hello, my name is ${name}!`);
// console.log('Hello, my name is ' + name + '!');


//  switch case
// const day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log(unknown);
// }
//Можно писать так:
// if (day === 1) {
//   console.log("Monday");
// } else if (day === 2) {
//   console.log("Tuesday");
// } else if (day === 3) {
//   console.log("Wednesday");
// } else {
//     console.log('uncnown');
// }
//Нo лучше так:
// function getDay(day) {
//     switch (day) {
//         case 1:
//             // console.log("Monday");
//             // break;
//             return "Monday";
//         case 2:
//             // console.log("Tuesday");
//             // break;
//             return "Tuesday";
//         case 3:
//             // console.log("Wednesday");
//             // break;
//             return "Wednesday";
//         default:
//             // console.log(unknown);
//             return "unknown";
//     }
// }
// console.log(getDay(1));
// console.log(getDay(2));
// console.log(getDay(3));





//Тернарный оператор
// const x = 5;
// if (x > 0) {
//     console.log('big');
// } else {
//     console.log('small');
// }
// //пишется так:
// console.log(x > 0 ?'big' : 'small')



//example with for
// for (var i = 1; i < 10; i += 1) {
//     //console.log(i); //1,2,3,4....9
// }
// console.log(i);


// //example with {...}
// {
//     let x = 1;
//     console.log(x);
// }
// //аналог
// {
//     var x = 1;
// }
// console.log(x);

