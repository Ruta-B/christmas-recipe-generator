function generateChristmasRecipe(event) {
    event.preventDefault();
   
    new Typewriter("#written-recipe", {
        strings: "Ingredients",
  
        autoStart: true,
        delay: 0.05,
        cursor: "",
    });

}



let formElement = document.querySelector("#recipe");
formElement.addEventListener("submit", generateChristmasRecipe)