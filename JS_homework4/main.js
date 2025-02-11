"use strict"
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a, b){
    return a * b;
}
console.log(area(6,7));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r){
    return 3.14 * r**2;
}
console.log(areaCircle(5));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(r, h){
    return 2 * 3.14 * r * h;
}
console.log(cylinder(4, 6));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayOutput(arrayArg){
    for (let arrayElement  of arrayArg){
        console.log(arrayElement)
    }
}
arrayOutput([2, true, 67, "Text"]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
//     Текст задати через аргумент

function createParagraph(text){
    document.write(`<p>${text} </p>`);
}
createParagraph("Hello!!!!");
createParagraph("15 minutes");

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
function creatUl(liText) {
    document.write(`<ul>
    <li>${liText}</li>
    <li>${liText}</li>
    <li>${liText}</li>
</ul>`)
}
creatUl("Lorem ipsum dolor.")

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li.
//     Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл) та виводить його через document.write
function createNumUl(text,number){
    document.write(`<ul>`)
    while (number) {
        document.write(`<li>${text}</li>`);
        number--;
    }
    document.write(`</ul>`)
}
createNumUl("Real Madrid", 5);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
function createArrUl(array){
    document.write(`<ul>`)
    for (let arr of array) {
        document.write(`<li>${arr}</li>`);
    }
    document.write(`</ul>`)
}
createArrUl(['text1', 1, 'text2', true, 'text3']);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
function printObjArr (array){
    for(let arr of array) {
        document.write(`<div>${arr.id} ${arr.name} ${arr.age}</div>`)
    }
}
printObjArr([
    {id:1, name:"Oksana", age:35},
    {id:2, name:"Bogdan", age:33},
    {id:3, name:"Volodymyr", age:29}
    ]
)

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function minNumber(array){
    let minNum = array[0];
    for (const number of array) {
        if (number < minNum){
            minNum = number;
        }
    }
    return minNum;
}
console.log(minNumber([1,9,5,4,9,3,8,27,35]))

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr){
    let sumArray = 0;
    for (let num of arr){
        sumArray +=num;
    }
    return sumArray;
}
console.log(sum([2,40,77,-77]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    let temp;
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2]=temp;
    return arr;
}
console.log(swap([2,6, 77, 0, 9], 2, 0))


// #mkGDenYnNjn
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for(let valuta of currencyValues){
        if (valuta.currency === exchangeCurrency){
            return sumUAH/valuta.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:8},{currency:'EUR',value:10}],'EUR'))