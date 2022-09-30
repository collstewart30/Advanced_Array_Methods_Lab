// <<<<<<<<<<<<<<<<< DATA SET <<<<<<<<<<<<<<<<<
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

function findMexicanFood() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Mexican") {
      return true;
    } else {
      return false;
    }
  });

  //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

  return results;
}

let mexicanFood = findMexicanFood();
console.log("Mexican Foods: ", mexicanFood);

// <<<<<<<<<<<<<<<<< PROBLEMS <<<<<<<<<<<<<<<<<

//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function findVegetarianFood() {
  let vegetarianFood = dishes.filter(
    function (dish){
      if (dish.cuisine === "Vegetarian"){
        return true;
      } else {
        return false;
      }
    }
  );
  return vegetarianFood;
}

let vegetarianDish = findVegetarianFood();
console.log("Vegetarian options: ", vegetarianDish);

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function findItalianFood() {
  let italianFood = dishes.filter(
    function (dish){
      if (dish.cuisine === "Italian" && dish.servings > 5){
        return true;
      } else {
        return false;
      }
    }
  );
  return italianFood;
}

let italianDish = findItalianFood();
console.log("Italian options: ", italianDish);

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter

function servingIdCount() {
  let equalServingIdCount = dishes.filter(
    function (dish){
      if(dish.id === dish.servings){
        return true;
      } else {
        return false;
      }
    }
  );
  return equalServingIdCount;
}

let countIdServing = servingIdCount();
console.log("id number equal to servings: ", countIdServing);

//4. Create a function that will return only dishes whose serving count is even.
//Filter

function evenServingCount(){
  let servingCount = dishes.filter(
    function(dish){
      if(dish.servings % 2 === 0){
        return true;
      } else {
        return false;
      }
    }
  );
  return servingCount;
}

let evenCount = evenServingCount();
console.log("Serving count even: ", evenCount);

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

function findTomatoCheese(){
  let ingredientsTomChe = dishes.filter(
    function(dishes){
      if(dishes.ingredients.includes("tomato") && dishes.ingredients.includes("cheese")){
        return true;
      } else {
        return false;
      }
    }
  );
  return ingredientsTomChe;
}

let tomatoCheese = findTomatoCheese();
console.log("Tomato and cheese: ", tomatoCheese);

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map

let nameCuisineType = dishes.map(
  function (dish){
    return (dish.cuisine)
  }
);

console.log(nameCuisineType);

// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array



//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map

let nameDishCuisine = dishes.map(
  function (dish){
    return (`${dish.cuisine} ${dish.name}`)
  }
);

console.log(nameDishCuisine);

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

let nameVegetarianCuisine = dishes.filter(
  function(dish){
    if(dish.cuisine === "Vegetarian"){
      return true;
    }
  }
).map(
  function (dish){
    return (`${dish.cuisine} ${dish.name}`)
  }
);

console.log(nameVegetarianCuisine);

// <<<<<<<<<<<<<<<<< BONUS <<<<<<<<<<<<<<<<<
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function findChickpea(){
  let ingredientsChickpea = dishes.filter(
    function(dishes){
      if(dishes.ingredients.includes("chickpea")){
        return true;
      } else {
        return false;
      }
    }
  );
  return ingredientsChickpea;
}

let includesChickpea = findChickpea();
console.log(includesChickpea);


//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

// If no initial value is provided, reduce() calls the callback function on each element in the array after the first element.
// Reduce will take an Array of numbers and reduce them to a single value
// Returns a single value, a number

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let numbersTool = numbers.reduce((total, el) => {
//   return el + total;
// }, 0)

// console.log(numbersTool);

function totalServings(){
  let totalServingCount = dishes.reduce((total, dish) => {
    return total + dish.servings;
  }, 0)
  return totalServingCount
};

console.log(totalServings());

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
