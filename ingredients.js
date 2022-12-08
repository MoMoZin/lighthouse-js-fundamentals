const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("First For Loop");
let index = 0;
while (index < ingredients.length) {
  console.log(ingredients[index]);
  index++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("First while Loop");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("First For Loop");
for (let j = ingredients.length - 1; j >= 0; j--) {
  console.log(ingredients[j]);
}
