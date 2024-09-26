function changeText() {
    const title = document.getElementById("title");
    title.innerHTML = "Discover the Wonders of Our Solar System!";
}

// Function to highlight the planets by changing their color and font size using getElementsByClassName
function highlightPlanets() {
    const planets = document.getElementsByClassName("planet");
    for (let i = 0; i < planets.length; i++) {
        planets[i].style.color = "#FF6347"; // Change text color to orange
        planets[i].style.fontSize = "22px"; // Increase font size
    }
}

// Function to change the planet image source using getElementById
function changeImage() {
    const img = document.getElementById("planet-img");
    img.src = "https://in.pinterest.com/pallaviyathish23268/solar-system-images/"; // Update with another space-related image
    img.alt = "New Solar System Image";
}

// Function to add a new planet to the list dynamically
function addPlanet() {
    const planetList = document.getElementById("planet-list");

    // Create a new list item
    const newPlanet = document.createElement("li");
    newPlanet.className = "planet"; // Add class to the new element
    newPlanet.style.color = "white"; // Set the color of the new planet

    // Create a text node and append it to the new li element
    const planetName = document.createTextNode("Saturn");
    newPlanet.appendChild(planetName);

    // Append the new planet to the list
    planetList.appendChild(newPlanet);
}
