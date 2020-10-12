console.log("oi")
const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.fix');
// console.log(modalOverlay)
// const recipes = require("./data.js");
// console.log(recipes)

for(let card of cards){
    card.addEventListener("click", function(){
        const recipeID = card.getAttribute("id")
        // for(recipe of recipes){
        //     if(recipe.id == recipeID){
        //         modalOverlay.querySelector("img").src=`${recipeID}`
        //         modalOverlay.querySelector("h3").innerHTML=`${recipeID.title}`      
        //     }
        // }
        console.log(card)
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src=`${card.id_img}`      
        modalOverlay.querySelector("h3").innerHTML=`${card.title}`      
    })
}

document.querySelector("#clear").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src=""

})