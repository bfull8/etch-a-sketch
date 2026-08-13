// Create 16x16 grid using flexbox
const container = document.querySelector("#container");
for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList = "square";
  square.style.flex = "1 1 calc(100% / 16)";
  container.appendChild(square);

  // Add a background color hovering over a square
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "green";
  });
}

// Prompt user how large the grid should be
const gridSizeBtn = document.querySelector("#grid-size-btn");
gridSizeBtn.addEventListener("click", () => {
  let gridSize = prompt("How many squares in each row/column would you like?");

  // Reset the grid
  container.innerHTML = "";

  // readd the squares
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList = "square";
    square.style.flex = `1 1 calc(100% / ${gridSize})`;
    container.appendChild(square);

    // Add a background color hovering over a square
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "green";
    });
  }
});
