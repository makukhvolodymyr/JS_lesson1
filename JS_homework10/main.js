// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
//Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let newElement = document.createElement("div")
let newButton = document.createElement("button")
newElement.id = "text";
newElement.style.height = "100px"
newElement.style.width = "100px"
newElement.style.background = "blue"
newButton.innerText = "button"
document.body.append(newElement, newButton)
newButton.onclick = function (ev) {
    newElement.style.display = "none"
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let newInput = document.createElement("input")
let newInputButton = document.createElement("button")
newInputButton.innerText = "submit"
newInput.type = "number"
document.body.append(newInput, newInputButton)
newInputButton.onclick = function (ev) {
    alert(`Введений вік ${newInput.value<18?"менше":"більше"} 18 років`);
}

// Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let firstInput = document.createElement("input")
let secondInput = document.createElement("input")
let thirdInput = document.createElement("input")
let inputButton = document.createElement("button")
inputButton.innerText = "submit"
firstInput.type = "text"
secondInput.type = "text"
thirdInput.type = "number"
document.body.append(firstInput, secondInput, thirdInput, inputButton)
inputButton.onclick = function (ev) {
    let h2 = document.createElement("h2")
    h2 = `${firstInput.value} ${secondInput.value} - ${thirdInput.value} років.`
    document.body.append(h2)
}
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let div = document.createElement("div")
document.body.append(div)
let tempNumber = +localStorage.getItem("number")
tempNumber +=1;
localStorage.setItem("number", tempNumber);
div.innerText = tempNumber;

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList
// зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html
// (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки
// index.html. Інфу НЕ виводити в консоль, а малювати в DOM
let sessionList = JSON.parse(localStorage.getItem("date"))|| [];
let loadDate = new Date();
sessionList.push(loadDate);

localStorage.setItem("date", JSON.stringify(sessionList));


// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let kgInput = document.createElement("input")
let poundP = document.createElement("p")
kgInput.type = "number"
document.body.append(kgInput,poundP)
kgInput.oninput= function (ev){
    poundP.innerText = `${kgInput.value * 2.2}`;
}

// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив
// з localStorage та додає в нього об'єкт

function addToLocalStorage(arrayName,objToAdd){
    if(!localStorage.getItem(arrayName)){
        alert ("Array not found");
    }
    const tempArr = JSON.parse(localStorage.getItem(arrayName));
    tempArr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(tempArr));
}
// addToLocalStorage("date", {})

// Створити 3 інпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let firstTableInput = document.createElement("input")
let secondTableInput = document.createElement("input")
let thirdTableInput = document.createElement("input")
let inputTableButton = document.createElement("button")
firstTableInput.type = "number"
secondTableInput.type = "number"
thirdTableInput.type = "text"
inputTableButton.innerText = "Create table"
let table = document.createElement("table")
document.body.append(firstTableInput, secondTableInput, thirdTableInput, inputTableButton, table)
inputTableButton.onclick = function(ev){
    for (let rows = 0; rows < firstTableInput.value; rows++){
        let tr = document.createElement("tr")
        table.append(tr)
        for (let columns = 0; columns <secondTableInput.value ; columns++){
            let td = document.createElement("td");
            td.innerText = thirdTableInput.value;
            tr.append(td);
        }
    }
}

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн" при перезавантаженні сторінки до значаення додається по 10грн,
// але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після
// попереднього.При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let moneyDiv = document.createElement("div")
document.body.append(moneyDiv)
let money = +localStorage.getItem("money")||100
if (sessionList.length > 1) {
    let lastDate = Date.parse(sessionList[sessionList.length - 2]);
    if ((loadDate.getTime() - lastDate) / 1000 > 10) {
        money += 100;
    }
}
localStorage.setItem("money", money);
moneyDiv.innerText = money + "грн";
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const arr = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Об'єкт ${i + 1}` }));
let prevButton = document.createElement("button")
let nextButton = document.createElement("button")
let arrDiv = document.createElement("div")
prevButton.innerText ="prev"
nextButton.innerText ="next"
document.body.append(prevButton, nextButton, arrDiv)
let num = 0;
let temp = arr.slice(num,num+10);
console.log(temp)
temp.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `ID: ${item.id}, Name: ${item.name}`;
    arrDiv.appendChild(itemDiv);
});
prevButton.onclick = function () {
    num+=10;
}
