//
// let pairs = [];
//
// let input = document.getElementById("input");
// let addButton = document.getElementById("add-button");
// let sortByNameButton = document.getElementById("name-sort");
// let sortByValueButton = document.getElementById("value-sort");
// let deleteButton = document.getElementById("delete-button");
// let textUl = document.getElementById("text-ul");
// let nameSortCounter, valueSortCounter ;
//
// let arrayUpdate = function (pairs) {
//     while (textUl.firstChild) {
//         textUl.removeChild(textUl.firstChild);
//     }
//     for (let pair of pairs){
//         let li = document.createElement("li");
//         li.innerText = `${pair.name}=${pair.value}`;
//         textUl.appendChild(li);
//     }
// }
//
// addButton.onclick = function (ev) {
//     let inputData = input.value.trim(); // Отримуємо введене значення і обрізаємо зайві пробіли
//
//     // Знайдемо позицію знака "=" у введеному рядку
//     let equalsIndex = inputData.indexOf("=");
//
//     // Перевіримо, чи є знак "=" і чи він не на початку чи в кінці рядка
//     if (equalsIndex > 0 && equalsIndex < inputData.length - 1) {
//         let name = inputData.slice(0, equalsIndex).trim(); // Ім'я до знака "="
//         let value = inputData.slice(equalsIndex + 1).trim(); // Значення після знака "="
//
//         // Перевірка на те, чи обидві частини складаються тільки з букв та цифр
//         if (/^[a-zA-Z0-9]+$/.test(name) && /^[a-zA-Z0-9]+$/.test(value)) {
//             const inputPair = {
//                 name: name,
//                 value: value
//             };
//             pairs.push(inputPair); // Додаємо пару до масиву
//             arrayUpdate(pairs); // Оновлюємо список
//             input.value = ""; // Очищаємо поле вводу
//             nameSortCounter = 1;
//             valueSortCounter = 1;
//         } else {
//             alert("Ім'я та значення повинні містити лише букви та цифри!");
//             input.value = "";
//         }
//     } else {
//         alert("Невірний формат! Введіть у форматі: Ім'я = Значення");
//         input.value = "";
//     }
// }
//
// sortByNameButton.onclick = function (ev) {
//     if (!nameSortCounter) {
//         alert("Введіть значення");
//     } else {
//         pairs.sort((a, b) => nameSortCounter % 2 === 0 ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
//         arrayUpdate(pairs);
//         input.value = "";
//         nameSortCounter++;
//     }
// }
//
// sortByValueButton.onclick = function (ev) {
//     if (!valueSortCounter) {
//         alert("Введіть значення");
//     } else {
//         pairs.sort((a, b) => valueSortCounter % 2 === 0 ? b.value.localeCompare(a.value) : a.value.localeCompare(b.value));
//         arrayUpdate(pairs);
//         input.value = "";
//         valueSortCounter++;
//     }
// }
//
// deleteButton.onclick = function (ev) {
//     pairs.length = 0;
//     arrayUpdate([]);
//     input.value = "";
//     nameSortCounter = 0;
//     valueSortCounter = 0;
// }

let pairs = [];

let input = document.getElementById("input"); // Поле вводу для пари "ім'я = значення"
let addButton = document.getElementById("add-button"); // Кнопка для додавання пари в список
let sortByNameButton = document.getElementById("name-sort"); // Кнопка для сортування за ім'ям
let sortByValueButton = document.getElementById("value-sort"); // Кнопка для сортування за значенням
let deleteButton = document.getElementById("delete-button"); // Кнопка для видалення всіх пар
let textUl = document.getElementById("text-ul"); // Список (ul), куди додаються пари
let nameSortCounter, valueSortCounter; // Лічильники для сортування, щоб чергувати напрямок сортування

// Функція для оновлення списку на сторінці
let arrayUpdate = function (pairs) {
    // Спочатку очищаємо поточний список
    while (textUl.firstChild) {
        textUl.removeChild(textUl.firstChild);
    }

    for (let pair of pairs) {
        let li = document.createElement("li");
        li.innerText = `${pair.name}=${pair.value}`;
        textUl.appendChild(li);
    }
}

// Обробник події для кнопки "Add" (додавання пари)
addButton.onclick = function (ev) {
    let inputData = input.value.trim(); // Отримуємо введене значення і обрізаємо зайві пробіли

    // Перевірка "="
    let equalsIndex = inputData.indexOf("=");
    if (equalsIndex > 0 && equalsIndex < inputData.length - 1) {
        let name = inputData.slice(0, equalsIndex).trim();
        let value = inputData.slice(equalsIndex + 1).trim();

        // Перевірка символів(букви, цифри)
        if (/^[a-zA-Z0-9]+$/.test(name) && /^[a-zA-Z0-9]+$/.test(value)) {
            const inputPair = {
                name: name,
                value: value
            };
            pairs.push(inputPair);
            arrayUpdate(pairs);
            input.value = "";
            nameSortCounter = 1;
            valueSortCounter = 1;
        } else {
            alert("Ім'я та значення повинні містити лише букви та цифри!");
            input.value = ""; // Очищаємо поле вводу
        }
    } else {
        alert("Невірний формат! Введіть у форматі: Ім'я = Значення");
        input.value = "";
    }
}

// Обробник події для кнопки "Sort by Name" (сортування за ім'ям)
sortByNameButton.onclick = function (ev) {
    if (!nameSortCounter) {
        alert("Введіть значення");
    } else {
        // Сортуємо, змінюючи напрямок сортування при кожному натисканні
        pairs.sort((a, b) => nameSortCounter % 2 === 0 ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
        arrayUpdate(pairs);
        input.value = "";
        nameSortCounter++;
    }
}

// Обробник події для кнопки "Sort by Value" (сортування за значенням)
sortByValueButton.onclick = function (ev) {
    if (!valueSortCounter) {
        alert("Введіть значення");
    } else {
        // Сортуємо, змінюючи напрямок сортування при кожному натисканні
        pairs.sort((a, b) => valueSortCounter % 2 === 0 ? b.value.localeCompare(a.value) : a.value.localeCompare(b.value));
        arrayUpdate(pairs);
        input.value = "";
        valueSortCounter++;
    }
}

// Обробник події для кнопки "Delete" (видалення всіх пар)
deleteButton.onclick = function (ev) {
    pairs.length = 0;
    arrayUpdate([]);
    input.value = "";
    nameSortCounter = 0;
    valueSortCounter = 0;
}