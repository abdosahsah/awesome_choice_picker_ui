// Get the elements
const choicesInput = document.getElementById("choices-input");
const displayChoicesContainer = document.getElementById("display-choices");

// Add event listener to the input
choicesInput.addEventListener("keydown", (e) => {
  // Check if Enter key is pressed
  if (e.key === "Enter") {
    // Get the value of the input
    const choices = choicesInput.value
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    // Empty the input
    choicesInput.value = "";
    displayChoices(choices);
  }
});

// Display the choices
function displayChoices(choices) {
  // Empty the choices container
  displayChoicesContainer.innerHTML = "";

  // Push the choices to the container
  choices.forEach((choice) => {
    const choiceEl = document.createElement("span");
    choiceEl.classList.add("choice");
    choiceEl.textContent = choice;
    displayChoicesContainer.appendChild(choiceEl);
  });
}
