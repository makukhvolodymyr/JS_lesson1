"use strict"
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = (a, b) => a * b;
console.log(area(7, 6));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaCircle = (r)=> 3.14 * r**2;
console.log(areaCircle(8));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
let cylinder = (r, h) => 2 * 3.14 * r * h;
console.log(cylinder(5, 8));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayOutput = (arrayArg) =>{
    for (let arrayElement  of arrayArg){
        console.log(arrayElement)
    }
}
arrayOutput([1, true, 80, "Text"]);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
//     Текст задати через аргумент

let createParagraph = (text) => {
    document.write(`<p>${text} </p>`);
}
createParagraph("Hi!!!!");
createParagraph("Where are You?");

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
let creatUl = (liText)=>{
    document.write(`<ul>
    <li>${liText}</li>
    <li>${liText}</li>
    <li>${liText}</li>
</ul>`)
}
creatUl("Tom Redl")

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li.
//     Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл) та виводить його через document.write
let createNumUl= (text,number)=>{
    document.write(`<ul>`)
    while (number) {
        document.write(`<li>${text}</li>`);
        number--;
    }
    document.write(`</ul>`)
}
createNumUl("Manchester United", 5);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
let createArrUl = (array) => {
    document.write(`<ul>`)
    for (let arr of array) {
        document.write(`<li>${arr}</li>`);
    }
    document.write(`</ul>`)
}
createArrUl(['Cat', 1, 'dog', true, 'fish']);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let printObjArr =  (array) =>{
    for(let arr of array) {
        document.write(`<div>${arr.id} ${arr.name} ${arr.age}</div>`)
    }
}
printObjArr([
        {id:1, name:"Oksana", age:30},
        {id:2, name:"Bogdan", age:19},
        {id:3, name:"Volodymyr", age:29}
    ]
)

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let minNumber = (array) =>{
    let minNum = array[0];
    for (const number of array) {
        if (number < minNum){
            minNum = number;
        }
    }
    return minNum;
}
console.log(minNumber([1,9,0,4,9,3,8,-8,35]))

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sum = (arr) =>{
    let sumArray = 0;
    for (let num of arr){
        sumArray +=num;
    }
    return sumArray;
}
console.log(sum([2,40,-2,10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) =>{
    let temp;
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2]=temp;
    return arr;
}
console.log(swap([10000,10, 77, 0, 9], 1, 0))


// #mkGDenYnNjn
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    for(let valuta of currencyValues){
        if (valuta.currency === exchangeCurrency){
            return sumUAH/valuta.value;
        }
    }
}
console.log(exchange(20000,[{currency:'USD',value:8},{currency:'EUR',value:10}],'USD'))