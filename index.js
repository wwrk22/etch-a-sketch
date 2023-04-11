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
  addMouseoverListener(square);
}

function addMouseoverListener(square) {
  square.addEventListener('mouseover', () => colorSquare(square));
}

function colorSquare(square) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Prompt user for new grid size, then create the grid.
const btn = document.querySelector('#new-grid-btn');
btn.addEventListener('click', createNewGrid);

// Init
drawGrid(DEFAULT_NUM_SQUARES_PER_SIDE);
