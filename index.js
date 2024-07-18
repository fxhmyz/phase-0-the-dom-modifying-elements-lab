// Create a new div element
const element = document.createElement("div");

// Append the new div element to the body
document.body.append(element);

// Create a new ul element
const ul = document.createElement("ul");

// Create and append 3 li elements to the ul
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString(); // Set the text content of the li
  ul.append(li);
}

// Append the ul to the previously created div
element.append(ul);

// Get the element with id "main"
const main = document.getElementById("main");

// Set its innerHTML
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// Change style properties of the element
main.style.height = "300px";
main.style.backgroundColor = "#27647B";

// Add text content
main.textContent = "You've changed what's on the screen!";

// Adjust other style properties
main.style.fontSize = "24px";
main.style.marginLeft = "30px";
main.style.lineHeight = 2;

// Add and remove class names
main.classList.remove("dog");
main.classList.add("cat", "sale");

// Get the first ul element in the document
const ulElement = document.getElementsByTagName("ul")[0];

// Get the second li child of the ul element
const secondChild = ulElement.querySelector("li:nth-child(2)");

// Remove the second li element from the ul
ulElement.removeChild(secondChild);

// Remove the entire ul element
ulElement.remove();

// Create a new div element
const newElement = document.createElement("div");

// Set its text content
newElement.textContent = "ALI is the champion";

// Append the new div element to the body
document.body.append(newElement);
