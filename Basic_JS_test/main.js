let pairs = [];

let input = document.getElementById("input");
let addButton = document.getElementById("add-button");
let sortByNameButton = document.getElementById("name-sort");
let sortByValueButton = document.getElementById("value-sort");
let deleteButton = document.getElementById("delete-button");
let textUl = document.getElementById("text-ul");

// function showList(){
//     for (arr of array){
//         let li = document.createElement("li");
//         li.innerText = arr;
//         textUl.appendChild(li);
//     }
// }
// window.onload = showList();

addButton.onclick = function (ev){
    let [name, value] = input.value.trim().split("=");
    const pair = {
        name:name.trim(),
        value:value.trim()
    };
    pairs.push(pair);
    while (textUl.firstChild) {
        textUl.removeChild(textUl.firstChild);
    }
    for (p of pairs){
        let li = document.createElement("li");
        li.innerText = `${p.name}=${p.value}`;
        textUl.appendChild(li);
    }
}


sortByNameButton.onclick = function (ev) {
    while (textUl.firstChild) {
        textUl.removeChild(textUl.firstChild);
    }

    pairs.sort((a,b)=> a.name.localeCompare(b.name));

    for (p of pairs){
        let li = document.createElement("li");
        li.innerText = `${p.name}=${p.value}`;
        textUl.appendChild(li);
    }
}

sortByValueButton.onclick = function (ev) {
    while (textUl.firstChild) {
        textUl.removeChild(textUl.firstChild);
    }

    pairs.sort((a,b)=> a.value.localeCompare(b.value));

    for (p of pairs){
        let li = document.createElement("li");
        li.innerText = `${p.name}=${p.value}`;
        textUl.appendChild(li);
    }
}

deleteButton.onclick





// for (const pair in pairs){
//     textArea.innerText.concat(pair);
// }
// pairs.sort((a,b)=> a.value.localeCompare(b.value));
// console.log(pairs);
// pairs.sort((a,b)=> b.value.localeCompare(a.value));
// console.log(pairs);
// pairs.length = 0;


// let array = [
//     "First = Oksana",
//     "Second = Volodymyr95",
//     "Third = Leopolis92  "
// ];
//
// let addButton = document.getElementById("add-button");
// let input = document.getElementById("input");
// let ul = document.getElementById("text-ul");
//
// if (addButton && input && ul) {
//     addButton.onclick = function(ev) {
//         // Отримуємо значення з input
//         let inputData = input.value.trim(); // Використовуємо trim(), щоб прибрати зайві пробіли
//
//         // Якщо поле не порожнє
//         if (inputData !== "") {
//             let li = document.createElement("li");
//             li.innerText = inputData; // Присвоюємо значення введене користувачем
//             ul.appendChild(li); // Додаємо новий елемент в список
//             input.value = ""; // Очищаємо поле вводу після додавання
//         } else {
//             console.log("Поле не може бути порожнім");
//         }
//     };
// } else {
//     console.log("Не знайдені необхідні елементи DOM!");
// }
// };