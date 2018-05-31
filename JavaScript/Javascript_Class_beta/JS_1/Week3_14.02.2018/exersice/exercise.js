let recipe = {
  name: "Cake",
  image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Smores-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611980872.jpeg",
  ingredients: [{
    name: "milk",
    amount: 300
  }, {
    name: "flour",
    amount: 200
  }, {
    name: "sugar",
    amount: 100
  }],
  steps: ["Get all the ingredients", "Mix them all together", "Cook Them", "Make a cake"],
};

(function() {
  // Get the <div> tag from the HTML page
  let div = document.getElementById("container");

  let h1Tag = document.createElement("h1");
  h1Tag.innerHTML = "My recipes"

  div.append(h1Tag); ///////////////////////////////////


  // let ul = document.createElement("ul");
  // for (i = 0; i < recipe.ingredients.length; i++) {
  //
  //   let li = document.createElement("li");
  //   li.innerHTML = ["the amount for "] + recipe.ingredients[i].name + " is " + recipe.ingredients[i].amount;
  //   ul.append(li);
  // }
  //  container.append(ul);
  let ul = document.createElement("ul");

  recipe.ingredients.forEach(function(ingredient) {
    let li = document.createElement("li");
    li.innerHTML = "the amount for " + ingredient.name + " is " + ingredient.amount;
    ul.append(li);
  })
  container.append(ul);
})();