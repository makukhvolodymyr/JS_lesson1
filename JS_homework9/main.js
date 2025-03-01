// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let newDiv = document.createElement("div");
newDiv.innerText = "Homework 9"
newDiv.classList.add("wrap","collapse","alpha", "beta");
newDiv.style.background = "silver";
newDiv.style.color = "darkred";
newDiv.style.fontSize = "20px";
document.body.appendChild(newDiv);
let cloneDiv = newDiv.cloneNode(true);
document.body.appendChild(cloneDiv);


// #OPLI89c9G
// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let products = ['Main','Products','About us','Contacts']
let ul = document.createElement("ul");
for (const product of products) {
    let li = document.createElement("li");
    li.innerText = product;
    ul.appendChild(li);
}
document.body.appendChild(ul)

// #jeBqHV525U5
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
    let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    let div = document.createElement("div")
    // for (const divKey in div) {
    //     div.innerText = divKey
    // }
    div.innerText = `Title: ${course.title} , duration: ${course.monthDuration} months.`
    document.body.appendChild(div);
}

// #Kx1xgoKy8
// - Є масив
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let div = document.createElement("div")
    div.classList.add("item");
    let h1 = document.createElement("h1")
    h1.classList.add("heading")
    let p = document.createElement("p")
    p.classList.add("description")
    h1.innerText = course.title;
    p.innerText = course.monthDuration;
    div.append(h1, p)
    document.body.appendChild(div);
}


