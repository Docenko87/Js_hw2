
// --------- Задание 1 --------- //
// Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–2), подростком (12–18), взрослым 
// (18_60) или пенсионером (60– ...).

let age = prompt ("Укажите ваш возраст");
if (age <= 11){
    message = 'Вы ребёнок';
} else if (age <=17) {
    message = "Вы подросток";
} else if (age <=59) {
    message = "Вы взрослый";
} else if (age <=120) {
    message = "Вы пенсионер";
}
alert( message );

// --------- Задание 2 --------- //
// Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д)
// let number = prompt ("Введите число от 0 до 9");
// if  (number == 0){
//     message = "Спецсимвол )";
// } else if (number ==1){
//     message = "Спецсимвол !";
// } else if (number ==2){
//     message = "Спецсимвол @";
// }  else if (number ==3){
//     message = "Спецсимвол #";
// }  else if (number ==4){
//     message = "Спецсимвол $";
// }  else if (number ==5){
//     message = "Спецсимвол %";
// }  else if (number ==6){
//     message = "Спецсимвол ^";
// }  else if (number ==7){
//     message = "Спецсимвол &";
// }  else if (number ==8){
//     message = "Спецсимвол *";
// }  else if (number ==9){
//     message = "Спецсимвол (";
// } 
// alert(message);

// --------- Задание 3 --------- //
// Запросить у пользователя трехзначное и число и проверить, 
// есть ли в нем одинаковые цифры.
// let number = prompt ("Введите трёхзначное число", '000');
// if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
//     {
//         alert('В вашем числе есть повторяющиеся цифры');
//     }
//     else
//         alert('В вашем числе нет повторяющихся чисел');

// --------- Задание 4 --------- //
// Запросить у пользователя год и проверить, високосный он 
// или нет. Високосный год либо кратен 400, либо кратен 4 и 
// при этом не кратен 100
// let year = prompt ("Укажите год", '');
// if (year%4 == 0 && year %100 !== 0)
// {
//     alert('Год является високосным');
// }
// else
//     alert('Год не является високосным');

// --------- Задание 5 --------- //
// Запросить у пользователя пятиразрядное число и 
// определить, является ли оно палиндромом.
// let number = prompt("Введите число от 10000 до 99999", 0);
//     number = number + '';
//     if (number === number.split('').reverse().join(''))
//         alert("Введенное число является палиндромом");
//     else
//         alert('Введенное число не является палиндромом');

// --------- Задание 6 --------- //
// Написать конвертор валют. Пользователь вводит количество USD,
// выбирает, в какую валюту хочет перевести: EUR, 
// UAN илиAZN, и получает в ответ соответствующую сумму.
// let amount = prompt("Введите сумму в USD", 0);
//     let currency = prompt("EUR = 1, RUR = 2, CHY = 3", 0);
//     switch(currency) {
//         case '1':
//             console.log(amount*0.93 + ' EUR');
//             break;
//         case '2':
//             console.log(amount*96.6 + ' RUR');
//             break;
//         case '3':
//             console.log(amount*7.28 + ' CNY');
//             break;
//     }

// --------- Задание 7 --------- //
// Запросить у пользователя сумму покупки и вывести сумму 
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 
// до 500 – 5%, от 500 и выше – 7%.
// let amount = prompt('Введите сумму покупки');
// if (amount <=200 && amount < 200)
//         alert(amount + ' скидки нет');
//     else if (amount >=200 && amount < 300)
//         alert(amount/100*97 + ' скидка будет 3%');
//     else if (amount >=300 && amount < 500)
//         alert(amount/100*95 + ' скидка будет 5%');
//     else if (amount >=500)
//         alert(amount/100*93 + ' скидка будет 7%')

// --------- Задание 8 --------- //
// Запросить у пользователя длину окружности и периметр 
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// let c = prompt ('Введите длину окружности', '');
// let p = prompt ('Введите периметр квадрата', '');
// const PI = 3.14;
// cS = (c * c) / (4 * PI); //определение площади окружности
// sP = (p * p) / 16; //определение площади квадрата

// alert("Площадь окружности будет = " + cS);
// alert("Площадь квадрата будет = " + sP);
// if (cS <= sP)
// alert("Такая фигура помещается в указанный квадрат");
// else if (cS > sP)
// alert("Такая фигура не помещается в указанный квадрат");

// --------- Задание 9 --------- //
// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 
// балла. После вопросов выведите пользователю количество 
// набранных баллов
// let first = prompt('Кто победил на ЧМ по футболу в 2022 году? 1 - Бразилия 2 - Аргентина 3 - Франция');
// let second = prompt('С какой областью граничит Курская область? 1 - Ростовская 2 - Воронежская 3 - Тульская');
// let third = prompt('Чему равна площадь окружности, если длина равна 32? 1 - 81,5 2 - 80 3 - 16');
// let score = 0;
//     if (first == 2)
//         score += 2;
//     if (second == 2)
//         score += 2;
//     if (third == 1)
//         score += 2;
// alert('Вы набрали ' + score + ' баллов.');

// --------- Задание 10 --------- //
// Запросить дату (день, месяц, год) и вывести следующую 
// за ней дату. Учтите возможность перехода на следующий 
// месяц, год, а также високосный год. 
// let date = prompt('Введите дату - день.месяц.год ');
// date = date.split('.');
// let oldDate = new Date(date[2], date[1]-1, date[0]);
// oldDate.setDate(oldDate.getDate()+1);
// alert('Следующая дата будет ' + oldDate);
