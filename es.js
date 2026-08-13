function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createGrid(gridSize) {
  container.innerHTML = "";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList = "square";
    square.style.flex = `1 1 calc(100% / ${gridSize})`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    });

    container.appendChild(square);
  }
}

const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#grid-size-btn");

// Create 16x16 grid using flexbox
createGrid(16);

// Allow user to change grid size
gridSizeBtn.addEventListener("click", () => {
  let gridSize;
  while (true) {
    gridSize = prompt("How many squares in each row/column would you like?");
    if (gridSize >= 1 && gridSize <= 100) {
      break;
    }
  }
  createGrid(gridSize);
});

//rgb(255,1,0)
