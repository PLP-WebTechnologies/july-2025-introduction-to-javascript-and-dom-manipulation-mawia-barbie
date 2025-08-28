//  Part 1: Variables & Conditionals
let name = "Mawia";
let age = 20;
let number = 15;

// Displaying a welcome message
document.getElementById("welcome").innerText = "Welcome, " + name + "!";

// Conditional check for age
if (age >= 18) {
  document.getElementById("checkAge").innerText = name + " is an adult ";
} else {
  document.getElementById("checkAge").innerText = name + " is not an adult ";
}

// Conditional check for odd/even number
if (number % 2 === 0) {
  document.getElementById("oddEven").innerText = number + " is even.";
} else {
  document.getElementById("oddEven").innerText = number + " is odd.";
}
// Part 2: Functions

// Function 1: Greeting
function greetUser(userName) {
  document.getElementById("result").innerText = "Hello, " + userName + "!";
}

// Function 2: Calculate total price
function calculateTotal(quantity, pricePerItem) {
  let total = quantity * pricePerItem;
  document.getElementById("result").innerText = "Total: $" + total;
}

//  Part 3: Loops

// Loop Example 1: For loop counting
function countToFive() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  document.getElementById("counter").innerText = "Counting: " + output;
}

// Loop Example 2: ForEach loop with array
function listFruits() {
  let fruits = ["Apple", "Banana", " Mango"];
  let ul = document.getElementById("fruitList");
  ul.innerHTML = ""; // clear list first

  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.innerText = fruit;
    ul.appendChild(li);
  });
}
// Part 4: DOM Interactions


// 1. Change background color
function changeBackground() {
  document.body.style.backgroundColor = "#d1f7c4"; // light green
}

// 2. Toggle message visibility
function toggleMessage() {
  let msg = document.getElementById("message");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
}

