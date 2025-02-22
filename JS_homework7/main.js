// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}
let users =[
    new User(1, "Андрій", "Ковальчук", "andriy.kovalchuk@example.com", "+380671234567"),
    new User(2, "Марія", "Шевченко", "maria.shevchenko@example.com", "+380672345678"),
    new User(5, "Олександр", "Мельник", "oleksandr.melnyk@example.com", "+380673456789"),
    new User(4, "Ірина", "Ткаченко", "iryna.tkachenko@example.com", "+380674567890"),
    new User(3, "Василь", "Романенко", "vasyl.romanenko@example.com", "+380675678901"),
    new User(6, "Наталія", "Гончар", "nataliia.gonchar@example.com", "+380676789012"),
    new User(7, "Богдан", "Козак", "bogdan.kozak@example.com", "+380677890123"),
    new User(8, "Ольга", "Дмитренко", "olha.dmytrenko@example.com", "+380678901234"),
    new User(952, "Максим", "Сидоренко", "maksym.sydorenko@example.com", "+380679012345"),
    new User(10, "Тетяна", "Лисенко", "tetyana.lysenko@example.com", "+380671112233")]
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//     залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter(value => value.id%2 ===0);
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort((a,b)=>a.id-b.id);
console.log(users);

// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname, email, phone, order = []) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, "Андрій", "Ковальчук", "andriy.kovalchuk@example.com", "+380671234567", ["Телефон", "Ноутбук"]),
    new Client(200, "Марія", "Шевченко", "maria.shevchenko@example.com", "+380672345678", ["Планшет"]),
    new Client(7, "Олександр", "Мельник", "oleksandr.melnyk@example.com", "+380673456789", ["Клавіатура", "Миша"]),
    new Client(4, "Ірина", "Ткаченко", "iryna.tkachenko@example.com", "+380674567890", ["Монітор"]),
    new Client(5, "Василь", "Романенко", "vasyl.romanenko@example.com", "+380675678901", ["Принтер", "Сканер", "Навушники"]),
    new Client(6, "Наталія", "Гончар", "nataliia.gonchar@example.com", "+380676789012", ["Чохол для телефону"]),
    new Client(3, "Богдан", "Козак", "bogdan.kozak@example.com", "+380677890123", ["Навушники"]),
    new Client(8, "Ольга", "Дмитренко", "olha.dmytrenko@example.com", "+380678901234", ["Фітнес-браслет"]),
    new Client(9, "Максим", "Сидоренко", "maksym.sydorenko@example.com", "+380679012345", ["Ноутбук", "Флешка"]),
    new Client(2, "Тетяна", "Лисенко", "tetyana.lysenko@example.com", "+380671112233", ["Планшет", "Смарт-годинник"])
];

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((a,b) =>a.order.length - b.order.length)
console.log(clients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, '
// 'виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний'
// ' об'єкт car

function Car(model, plant, year, maxSpeed, engineVolume) {
    this.model = model;
    this.plant = plant;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.plant}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна - ${this.engineVolume} л`);
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, '
// 'максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний'
// ' об'єкт car

class Cars{
    constructor (model, plant, year, maxSpeed, engineVolume) {
        this.model = model;
        this.plant = plant;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.plant}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна - ${this.engineVolume} л`);
    };

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок. Сторити об'єкт класу "принц" за допомоги класу який має поля
// ім'я, вік, туфелька яку він знайшов.За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella (name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [
    new Cinderella("Анастасія", 18, 36),
    new Cinderella("Марія", 20, 37),
    new Cinderella("Ольга", 22, 38),
    new Cinderella("Вікторія", 19, 36.5),
    new Cinderella("Тетяна", 21, 39),
    new Cinderella("Юлія", 23, 35),
    new Cinderella("Катерина", 18, 37.5),
    new Cinderella("Наталія", 20, 38.5),
    new Cinderella("Ірина", 22, 39),
    new Cinderella("Оксана", 35, 38)
];

function Prince (name, age, foundShoe){
    this.name = name;
    this.age = age;
    this.foundShoe = foundShoe;
}
let prince = new Prince("Богдан", 33, 35)
for (const cinderella of cinderellas) {
    if (prince.foundShoe === cinderella.footSize){
        console.log(`${cinderella.name} повинна бути з принцом`);
        break;
    }
}
console.log(`${cinderellas.find(value => value.footSize === prince.foundShoe).name} повинна бути з принцом`);

// *Через Array.prototype. створити власний foreach, filter

Array.prototype.customForEach = function (foreach) {
    for (let item of this){
        foreach(item);
    }
}
let arr = [10, 20, 40, 7, 2];
arr.customForEach((value) => console.log(value));

Array.prototype.customFilter = function (condition) {
    let array =[];
    for (let item of this){
        if(condition(item)){
            array.push(item);
        }
    }
    return array;
}
let numbers = [5, 8, 6, 7, 11, 0]
console.log(numbers.customFilter((value)=> value %2 !==0))