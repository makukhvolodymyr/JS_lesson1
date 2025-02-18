// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let firstString = ' dirty string   '
console.log(firstString.length);
let newStr = firstString.substring(1,13);
console.log(newStr)
console.log(newStr.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
let arr = str.split(' ');
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let array =[10,8,-7,55,987,-1011,0,1050,0] ;
let strArray = array.map(item=>item.toString());
console.log((strArray));


// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
function sortNums(array,direction) {
    if (direction === 'ascending') {
        return array.sort((a,b)=> a-b);
    }
    if (direction === 'descending') {
        return array.sort((a,b)=> b-a);
    }
}
console.log(sortNums(nums,'ascending'));

// - є масив

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a,b)=> b.monthDuration - a.monthDuration);
let filteredCoursesArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredCoursesArray);
let mappedCoursesArray = coursesAndDurationArray.map((value,index)=> {
    return {id: index + 1, title:value.title, monthDuration:value.monthDuration}
});
console.log(mappedCoursesArray);

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше


let suits =['spade', 'diamond','heart', 'clubs'];
let values =['6','7','8','9','10','jack','queen','king','ace'] ;
let cards =[];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit:suit, value:value};
        if (suit === "diamond" || suit ==="heart"){
            card.colour = "red";
        }
        else {
            card.colour = "black";
        }
        cards.push(card);
    }
}
console.log(cards);
let ace = cards.find(function (obj){
    return (obj.value === "ace" && obj.cardSuit === "spade");
});
console.log(ace);
let allSix = cards.filter(function (obj){
    return (obj.value === "6");
});
console.log(allSix);

let allReds = cards.filter(function (obj){
    return (obj.colour === "red");
});
console.log(allReds);

let allDiamonds = cards.filter(function (obj){
    return (obj.cardSuit === "diamond");
});
console.log(allDiamonds);

let highClubs = cards.filter(function (obj){
    return (obj.cardSuit === "clubs" && obj.value !=="6" && obj.value !=="7" && obj.value !=="8");
});
console.log(highClubs);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce((accumulator, card)=>{
    if (card.cardSuit === "spade"){
        accumulator.spades.push (card);
    } else if (card.cardSuit === "diamond"){
        accumulator.diamonds.push (card);
    } else if (card.cardSuit === "clubs"){
        accumulator.clubs.push (card);
    } else{
        accumulator.hearts.push (card);
    }
    return accumulator;
}, {spades:[], clubs:[], diamonds:[], hearts:[]});
console.log(reduce);

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let allSass = coursesArray.filter((obj)=> (obj.modules.includes("sass")));
console.log(allSass);

let allDocker = coursesArray.filter((obj)=> (obj.modules.includes("docker")));
console.log(allDocker);