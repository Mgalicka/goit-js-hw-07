const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}