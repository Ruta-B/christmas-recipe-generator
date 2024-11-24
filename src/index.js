function writeRecipe(response) {
  new Typewriter("#written-recipe", {
    strings: response.data.answer,

    autoStart: true,
    delay: 0.05,
    cursor: "",
  });
}
function generateChristmasRecipe(event) {
  event.preventDefault();

  let userInputElement = document.querySelector("#user-search-input");
  let apiKey = "a7oe402d391da40bfcfe02337et07b50";
  let context =
    "You write various christmas recipes in basic HTML. Make sure to provide a clear and precise answer based on user instructions.DO NOT include HTML word in the recipe";
  let prompt = `User instructions: christmas recipe about ${userInputElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#written-recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generate" >🎄 Generating Christmas recipe with ${userInputElement.value}...</div>`;

 
  axios.get(apiUrl).then(writeRecipe);
}

let formElement = document.querySelector("#recipe");
formElement.addEventListener("submit", generateChristmasRecipe);
