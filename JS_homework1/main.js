// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com',
// 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let n = 'hello'
console.log(n)

let o = 'owu'
console.log(o)

let p = 'com'
console.log(p)

let d = 'ua'
console.log(d)

let e = 1
console.log(e)

let f = 10
console.log(f)

let g = -999
console.log(g)

let h = 123
console.log(h)

let i = 3.14
console.log(i)

let j = 2.7
console.log(j)

let k = 16
console.log(k)

let l = true
console.log(l)

let m = false
console.log(m)

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Volodymyr'
let middleName = 'Mykhailovych'
let lastName = 'Makukh'
let person = lastName + ' ' + firstName + ' ' + middleName
console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100
let b = '100'
let c = true

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова
// які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let fName = prompt("What is your name?")
let midName = prompt("What is your middle name?")
let age = prompt("How old are you?")
console.log(`I am ${fName} ${midName}. I am ${age} years old.`)
