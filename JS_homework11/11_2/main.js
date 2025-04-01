// const recipesDiv = document.getElementById("recipes")
// fetch('https://dummyjson.com/recipes')
//     .then(res => res.json())
//     .then(recipesObject => {
//             const {recipes} = recipesObject;
//             console.log(recipes);
//             for (const recipe of recipes) {
//                 const div = document.createElement("div");
//                 div.classList.add("recipe-container");
//                 const divWithInfo = document.createElement("div");
//                 divWithInfo.innerText = `
//                  "id": ${recipe.id},
//                  "name": ${recipe.name},
//                  "totalProducts": ${cart.totalProducts},
//                  "totalQuantity": ${cart.totalQuantity}
//             `
//                 const ol = document.createElement("ol");
//                 for (const ingredient of recipe.ingredients) {
//                     const li = document.createElement("li");
//                     const info = document.createElement("p");
//                     info.innerText =`
//                     "id": ${product.id},
//                     "title": ${product.title},
//                     "price": ${product.price},
//                     "quantity": ${product.quantity},
//                     "total": ${product.total},
//                     "discountPercentage": ${product.discountPercentage},
//                     "discountedTotal": ${product.discountedTotal},
//                 `
//                     const img = document.createElement("img");
//                     img.src = product.thumbnail;
//                     li.append(img, info);
//                     ol.appendChild(li)
//                 }
//                 div.append(divWithInfo, ol);
//                 cartsDiv.appendChild(div);
//                 document.body.appendChild(cartsDiv)
//             }
//         }
//     );
//
// fetch('https://dummyjson.com/recipes')
//     .then(res => res.json())
//     .then(console.log);
const url = new URL ('https://dummyjson.com/recipes');
url.searchParams.set("limit", "50");

const target = document.getElementsByClassName("recipes")[0];
fetch(url)
    .then(value => value.json())
    .then(recipesObjects => {
        const {recipes} = recipesObjects;
        for(const recipe of recipes){
            console.log(recipe)
            const recipeDiv = document.createElement("div");
            for (const recipeKey in recipe){
                if (Array.isArray(recipe[recipeKey])){
                    const arrayDiv = document.createElement("div");
                    const h3 = document.createElement("h3");
                    h3.innerText  = recipeKey;
                    const ol = document.createElement("ol");
                    const array = recipe[recipeKey];
                    for (const item of array){
                        const li = document.createElement("li");
                        li.innerText = item;
                        ol.appendChild(li);
                    }
                    arrayDiv.append(h3, ol);
                    recipeDiv.appendChild(arrayDiv);
                }
                else {
                    if (recipeKey !== "image") {
                        const keyDiv = document.createElement("div");
                        keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                        recipeDiv.appendChild(keyDiv);
                    }
                }
            }
            const img = document.createElement("img");
            img.src = recipe.image;
            recipeDiv.appendChild(img);
            target.appendChild(recipeDiv)  ;
        }

    })

