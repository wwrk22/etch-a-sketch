const SQUARE_WIDTH = 44;
const DEFAULT_NUM_SQUARES_PER_SIDE = 16;
const gridDivId = '#grid';

function getGrid() {
  return document.querySelector(gridDivId);
}

function clearGrid() {
  getGrid().replaceChildren();
}

// Create a grid of 16x16 squares.
function drawGrid(numSquaresPerSide) {
  // Correctly size the grid to make it a square.
  const grid = getGrid();
  const totalNumSquares = numSquaresPerSide ** 2;
  grid.style.width = `${numSquaresPerSide * SQUARE_WIDTH}px`;

  for (let i = 0; i < totalNumSquares; i++) {
    const square = document.createElement('div');
    square.classList.toggle('square'); // Initial style
    setupSquare(square); // Event listeners and toggled style
    grid.appendChild(square);
  }
}

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
  let numSquaresPerSide = prompt("Enter number of squares per side");
  numSquaresPerSide = (numSquaresPerSide > 100) ? 100 : numSquaresPerSide;
  clearGrid();
  drawGrid(numSquaresPerSide);
}

// Init
drawGrid(DEFAULT_NUM_SQUARES_PER_SIDE);
