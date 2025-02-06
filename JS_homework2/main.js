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
    user1 = {
        name: "Volodymyr",
        username: "makuhv",
        password: "okten"
    },
    user2 = {
        name: "Oksana",
        username: "ksywa",
        password: "immortalwombat"
    },
    user3 = {
        name: "Bohdan",
        username: "bodia91",
        password: "leopolis"
    },
    user4 = {
        name: "Oleksii",
        username: "did",
        password: "ilovealya"
    },
    user5 = {
        name: "Albina",
        username: "albi70",
        password: "ilovealya"
    },
    user6 = {
        name: "Oleksandr",
        username: "brother",
        password: "fcker69"
    },
    user7 = {
        name: "Andrew",
        username: "babilunga",
        password: "vau"
    },
    user8 = {
        name: "Natalya",
        username: "natkanat",
        password: "guitar7"
    },
    user9 = {
        name: "Ivan",
        username: "inzaghi",
        password: "forzajuve"
    },
    user10 = {
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
let x = prompt("Введіть довільне число") !=0 ? console.log("Yes"):console.log("No")

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

