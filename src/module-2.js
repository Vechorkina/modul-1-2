// // index -   0, 1, 2  3
// // const arr = [1, 2, 3, 4]
// // console.log(arr);

// // const obj = {
// //   0: 1,
// //   1: 2,
// //   2: 3,
// //   3: 4,
// // };
// // console.log(obj);

// // console.log(arr[0]); 
// // console.log(obj[0]); 
// // console.log(arr.length > 0); 
// // console.log(obj.length > 0); 
// // console.log(typeof arr); 
// // console.log(typeof obj);
// // console.log(Array.isArray(arr)); //правильный вариант проверки
// // console.log(Array.isArray(obj)); //правильный вариант проверки
// //достучаться по индексу:
// // arr[2] = 33;
// // console.log(arr);




// //Длина. Если известна длина, можно написать цикл
// //Перебор всех элементов массива

// // for (let i = 0; i < arr.length; i += 1) {
// //     // arr[i] = 0;
// //     console.log(arr[i]);
// // }
// // console.log(arr)


// const arr = [1, 2, 3, 4];
// // //Итерация
// for (let i = 0; i < arr.length; i += 1) {
//   // arr[i] = 0;
//     const value = (arr[i]);
//     console.log(value);
// }
// console.log(arr);


// for (const value of arr) {
//     console.log(value)
// }

// //будет использоваться только эта форма:
// arr.forEach(function (value) {
//     console.log(value);
// })


// //break - при проверке, поиске чего-то
// const arr = [1, 2, 3, 4];
// for (let value of arr) {

//     if (value === 3) {
//         break
//     }
//     console.log(value);
// }

//Четные показать
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let value of arr) {
//     if (value % 2 === 0) {
//         continue;
//     }
//     console.log(value);
// }


//Пример
//console.log(Object.entries({ name: 'Bobby', age: 15 }));

//Пример
// const arr = Object.entries({ name: 'Bobby', age: 15 });
// console.log(arr);


// //Массив внутри массива
// for (const keyValue of arr) {
//     // console.log(keyValue[0], keyValue[1]);
//     obj[keyValue[0]] = keyValue[1];
// }
// console.log(obj);



// //Многомерные массивы / array copy
// const arr = [1, 2, 3];
// const arr2 = [...arr];



//split, join
// const text = 'Hello Word!';
// console.log(text);

// const characters = text.split('');
// console.log(characters);

// const words = text.split(""); 
// console.log(words);




//Задание Написать задом наперед:
// const text = "Hello Word!";
// const arr = text.split('');
// arr.reverse();

// console.log(arr.join(''));
// //и в одну строчку )
// console.log('I love JS'.split('').reverse().join('')) 



// // Проверка множественных условий с includes()
// const userRole1 = 'ADMIN';
// const userRole2 = "USER";

// const superRoles = ['ADMIN', 'MANAGER', 'SUPERVISOR'];

// // if (
// //     userRole1 === 'ADMIN' ||
// //     userRole1 === 'MANAGER' ||
// //     userRole1 === 'SUPERVISOR') {
// //     console.log('Welcom admin!');
// // } // Так не делают, делают так:
    
// if (superRoles.includes(userRole1)) {
//     console.log("Welcom admin!");
// }

// function checkUser(role) {
//     if (superRoles.includes(userRole2)) {
//       console.log("Welcom admin!");
//     } else {
//       console.log("Welcome user!");
//     }
// }
// checkUser(userRole1);
// checkUser(userRole2);
// checkUser('MANAGER');


//Метод concat()
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// console.log([...oldClients, 4, 5, 6, ...newClients]);



//function
// fn1(1, 2, 3, 4, 5);
// function fn1(a, b, c, d) {
//     console.log(a, b, c, d);
// }

// const fn2 = function () {
//     console.log(...arguments);
//     console.log(Array.from(arguments)); //как вариант, можно так
// }

// const fn3 = () => {}; //У стрелочных ф-ций нет arguments
// fn2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);




//Array.from
// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//     3: 4,
//   length: 4,
// };
// console.log(obj);

// const arr = Array.from(obj);
// console.log(arr);


//Example
const human = {
    name: 'Bobby',
    age: '15'
}
const dog = {
  name: "Chappi",
  age: "3",
};

function getKeyByValue(obj, value) {
    const keyValues = Object.entries(obj);
    for (const item of keyValues) {  //ПЕРЕБОР ['name', 'Bobby']
        if (item[1] === value) {
            return item[0];
        }
    }
}
console.log(getKeyByValue(human, 'Bobby'));
console.log(getKeyByValue(human, "15"));
console.log(getKeyByValue(dog, "Chappi"));










































































