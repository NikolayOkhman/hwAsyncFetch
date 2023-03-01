//__________________________________ex1________________________________________
// function getFetchOne(){
//         console.log("loading post 1...");
//         return fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=>response.json())
// }
// function getFetchTwo(){
//         console.log("loading post 2...");
//         return fetch("https://jsonplaceholder.typicode.com/posts/2").then((response)=>response.json())
// }
// function getFetchThree(){
//         console.log("loading post 3...");
//         return fetch("https://jsonplaceholder.typicode.com/posts/3").then((response)=>response.json())
// }

// async function logFetch (){
//         let fetchOne = await getFetchOne()
//         console.log(fetchOne);
//         let fetchTwo = await getFetchTwo()
//         console.log(fetchTwo);
//         let fetchThree = await getFetchThree()
//         console.log(fetchThree);
// }

// logFetch()

//__________________________________ex2________________________________________

// function btcUSD (){

//                    return fetch("https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
//                       .then((response) => response.json())

// }

// function USDtoNIS (){

//                 return fetch ("https://api.exchangerate.host/latest").then((response)=>response.json())

// }

// function BTCtoILS (){
//         setInterval(async()=>{
//                 let a = await btcUSD()
//                 console.log('Bitcoin to USD '+ a.lastPrice+" $");
//                 let b = await USDtoNIS()
//                 console.log('USD to ILS '+ b.rates.ILS+" ש''ח");
//                 console.log("מחיר הביטקויין בשקל "+a.lastPrice*b.rates.ILS+" ש''ח")},15000)

// }
// BTCtoILS()

// _____________________________________ex3___________________________________________
let ingredients = [];
function getRandomCocktail() {
   fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => printToHTML(data));
}
function printToHTML(drink) {
   let newRandomCocktail = drink.drinks[0].strDrink;
   let ifAlcohol = drink.drinks[0].strAlcoholic;

   let cocktailName = document.getElementById("cocktailName");

   cocktailName.innerText = `You get: ${newRandomCocktail} Cocktail
       Alcohol : ${ifAlcohol}
    Ingredients: `;
   for (let i = 1; i <= 15; i++) {
      let ingredient = drink.drinks[0][`strIngredient${i}`];
      if (ingredient !== null) {
         ingredients.push(ingredient);
      }
   }
   setTimeout(() => {
      printIngredient();
   }, 2000);
}

function printIngredient() {
   let cocktailIngredient = document.getElementById("cocktailIngredient");
   ingredients.forEach((ingredient) => {
      cocktailIngredient.innerText += ` ${ingredient}, `;
      let ingredientToCheck = fetch(
         "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" +
            ingredient
      ).then((response) => response.json());
      ingredientToCheck.then((data) => console.log(data.ingredients[0]));
   });
}

document.getElementById("btn").addEventListener("click", () => {
   getRandomCocktail();
});
