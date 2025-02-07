// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array
array = ['one','two','three', 4, 5, 6, 'seven', true, -9, 0]
console.log(array)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
 let book1 = {
    title: "Harry Potter and philosopher's stone",
     pageCount: 319,
    genre: "Fantasy"
}
let book2 = {
    title: "1984",
    pageCount: 312,
    genre: "Distopia"
}
let book3 = {
    title: "The Wonderful Wizard of Oz",
    pageCount: 144,
    genre: "Children story"
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let firstBook = {
    title: "Under the Dome",
    pageCount: 1074,
    genre: "Sci-fi",
    authors: ["Steven","King"]
}
let secondBook = {
    title: "The Da Vinci Code",
    pageCount: 519,
    genre: "Detective",
    authors: ["Dan","Brown"]
}
let thirdBook = {
    title: "Tiger Trappers",
    pageCount: 416,
    genre: "Adventure novel",
    authors: ["Ivan","Bahrianyiy"]
}

// Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let userArray
userArray = [
    {
        name: "Volodymyr",
        username: "makuhv",
        password: "okten"
    },
    {
        name: "Oksana",
        username: "ksywa",
        password: "immortalwombat"
    },
    {
        name: "Bohdan",
        username: "bodia91",
        password: "leopolis"
    },
    {
        name: "Oleksii",
        username: "did",
        password: "ilovealya"
    },
    {
        name: "Albina",
        username: "albi70",
        password: "ilovealya"
    },
    {
        name: "Oleksandr",
        username: "brother",
        password: "fcker69"
    },
    {
        name: "Andrew",
        username: "babilunga",
        password: "vau"
    },
    {
        name: "Natalya",
        username: "natkanat",
        password: "guitar7"
    },
    {
        name: "Ivan",
        username: "inzaghi",
        password: "forzajuve"
    },
    {
        name: "Anhelina",
        username: "oshka",
        password: "blackberry"
    },
]
console.log(userArray[0].password)
console.log(userArray[1].password)
console.log(userArray[2].password)
console.log(userArray[3].password)
console.log(userArray[4].password)
console.log(userArray[5].password)
console.log(userArray[6].password)
console.log(userArray[7].password)
console.log(userArray[8].password)
console.log(userArray[9].password)

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatureArray = [
    [-5, -1, -8], [-3, 1, -4], [0, 2, -1], [2, 7, 3],
    [5, 9, 2], [1, 4, -1],[1, 5, 0],
]
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt("Введіть довільне число") !==0 ? console.log("Yes"):console.log("No")

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 0
switch (time) {
    case time>0 && time < 15 :
        console.log('Число належить до першої чверті');
        break;
    case time < 30 :
        console.log('Число належить до другої чверті');
        break;
    case time < 45 :
        console.log('Число належить до третьої чверті');
        break;
    case time <= 59 :
        console.log('Число належить до четвертої чверті');
        break;
    default: console.log('Число не входить до жодної чверті')
}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 13;
if (day>=1 && day<11){
    console.log('Число потрапляє у першу декаду місяця')
}
else if (day<21){
    console.log('Число потрапляє у другу декаду місяця')
}
else if (day<31){
    console.log('Число потрапляє у третю декаду місяця')
}
else console.log('Число не потрапляє у жодну декаду місяця')

    // - Скласти розклад на тиждень за домопоги switch.
    // Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
    // що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekDay = prompt('Введіть день тижня')
switch (weekDay) {
    case 'Понеділок':
        console.log('Monday');
        break;
    case 'Вівторок':
        console.log('Tuesday');
        break;
    case 'Середа':
        console.log('Wednesday');
        break;
    case 'Четвер':
        console.log('Thursday');
        break;
    case "П'ятниця":
        console.log('Friday');
        break;
    case 'Субота':
        console.log('Saturday');
        break;
    case 'Неділя':
        console.log('Sunday');
        break;
    default:
        console.log('Це не день тижня')
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt("Введіть перше число")
let number2 = +prompt("Введіть друге число")
if (number1<number2){
    console.log("Більшим є число " + number2)
}
else if (number1>number2){
    console.log("Більшим є число " + number1)
}
else console.log("Числа рівні")

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї
// falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let y = 'oksana'
if(!y){
    y='default'
}
console.log(y)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log("Супер")
}