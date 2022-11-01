function sayHello() {
    alter("Hello")
}
console.log("Hello")//Вывел в консоль"Hello"
//Задания 3 и 4 из модуля 5.4
const str = "Hello";
const reverse = str.split('').reverse().join('');
console.log(reverse);//Paзвернул "Hello"

let randomNumbr = Math.random() * 100;
console.log(randomNumbr);//Выводит случайное десятичное число от 1 до 100
 
let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum); //Выводит случайное число от 1 до 100 

//Пример работы с массивом
 let fruits = ["Яблоко", "Апельсин", "Груша"];
 console.log( fruits );//Выводим в консоль"Яблоко", "Апельсин", "Груша"

 console.log( fruits.pop("Груша") ); // удаляем "Груша" и выводим его
 console.log( fruits );

 console.log(fruits.push("Банан"));//Добавляем "Банан"
 console.log( fruits );//Получаем 'Яблоко', 'Апельсин', 'Банан'

 //Перечисляем каждый эл-т массива задание 5 модуль 5
 console.log( fruits[0] ); // Яблоко
console.log( fruits[1] ); // Апельсин
console.log( fruits[2] ); // Бананы

let arr = ["Cлива", "Киви", "Лимон"];
for (let i = 0; i < arr.length; i++) {
    console.log( arr[i] ); //Перебор массива 2-й способ
}

for (let i = 0; i < 10; i = i + 1) {
    console.log(i)//Получаем от 0 до 9
}

let arry = [1,2,3]

arry.forEach(function(item, index, array) {

   console.log(item)

});

