const SQUARE_WIDTH = 44;

// Create a grid of 16x16 squares.
const grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.toggle('square');
  grid.appendChild(square);
}

// Add initial style and event listeners to all squares.
const squares = document.querySelectorAll('.square');
squares.forEach(square => setupSquare(square));

function setupSquare(square) {
  addMouseEventListeners(square);
}

function addMouseEventListeners(square) {
  square.addEventListener('mouseover', () => toggleMouseoverStyle(square));
}

function toggleMouseoverStyle(square) {
  square.classList.toggle('mouseover-square');
}

// Prompt user for new grid size, then create the grid.
const btn = document.querySelector('#new-grid-btn');

btn.addEventListener('click', createNewGrid);

function createNewGrid() {
  let numSquares = prompt("Enter number of squares per side");
  numSquares = (numSquares > 100) ? 100 : numSquares;

  const gridWidth = SQUARE_WIDTH * numSquares;
  drawGrid(gridWidth);
}
