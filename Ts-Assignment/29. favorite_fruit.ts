let favorite_fruits: string[] = ["Graps", "Strawberry", "Orange", "Banana"];
  
if (favorite_fruits.includes("Graps")) {
  console.log("Graps is one of my favorite fruits.");
}

if (favorite_fruits.includes("Strawberry")) {
  console.log("Strawberry is one of my favorite fruits."); // This won't be printed
}

if (favorite_fruits.includes("Orange")) {
  console.log("Orange is one of my favorite fruits.");
}

if (favorite_fruits.includes("Banana")) {
  console.log("Banana is not my favorite fruits.");
}