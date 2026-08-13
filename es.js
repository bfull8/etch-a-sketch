// Create 16x16 grid using flexbox
const container = document.querySelector("#container");
for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList = "square";
  container.appendChild(square);

  // Add a background color hovering over a square
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "green";
  });
}
