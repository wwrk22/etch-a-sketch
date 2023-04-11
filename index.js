const SQUARE_WIDTH = 44;
const DEFAULT_NUM_SQUARES_PER_SIDE = 16;
const GRID_DIV_ID = '#grid';


// Grid functions
function getGrid() {
  return document.querySelector(GRID_DIV_ID);
}

function clearGrid() {
  getGrid().replaceChildren();
}

function drawGrid(numSquaresPerSide) {
  // Correctly size the grid to make it a square.
  const grid = getGrid();
  const totalNumSquares = numSquaresPerSide ** 2;
  grid.style.width = `${numSquaresPerSide * SQUARE_WIDTH}px`;

  for (let i = 0; i < totalNumSquares; i++) {
    const square = document.createElement('div');
    setupSquare(square); // Event listeners and style
    grid.appendChild(square);
  }
}

function createNewGrid() {
  let numSquaresPerSide = prompt("Enter number of squares per side");
  numSquaresPerSide = (numSquaresPerSide > 100) ? 100 : numSquaresPerSide;
  clearGrid();
  drawGrid(numSquaresPerSide);
}

// Square functions
function setupSquare(square) {
  square.classList.toggle('square'); // Initial style
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

// Init
drawGrid(DEFAULT_NUM_SQUARES_PER_SIDE);
