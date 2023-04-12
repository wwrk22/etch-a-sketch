const SQUARE_WIDTH = 44;
const DEFAULT_NUM_SQUARES_PER_SIDE = 16;
const GRID_DIV_ID = '#grid';

// data-key names
const INC_RED_HUE = 'data-inc-red-hue';
const INC_GREEN_HUE = 'data-inc-green-hue';
const INC_BLUE_HUE = 'data-inc-blue-hue';


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
  if (square.style.backgroundColor === "") {
    initialColor(square);
  } else if (square.style.backgroundColor !== "rgb(0, 0, 0)") {
    incrementalColor(square);
  }
}

function initialColor(square) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
  square.setAttribute(INC_RED_HUE, (red / 10));
  square.setAttribute(INC_GREEN_HUE, (green / 10));
  square.setAttribute(INC_BLUE_HUE, (blue / 10));
}

function incrementalColor(square) {
  const r = /\d+/g;
  let red = +(r.exec(square.style.backgroundColor)[0]) - +square.getAttribute(INC_RED_HUE);
  let green = +(r.exec(square.style.backgroundColor)[0]) - +square.getAttribute(INC_GREEN_HUE);
  let blue = +(r.exec(square.style.backgroundColor)[0]) - +square.getAttribute(INC_BLUE_HUE);
  red = (red < 0) ? 0 : red;
  green = (green < 0) ? 0 : green;
  blue = (blue < 0) ? 0 : blue;
  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Prompt user for new grid size, then create the grid.
const btn = document.querySelector('#new-grid-btn');
btn.addEventListener('click', createNewGrid);

// Init
drawGrid(DEFAULT_NUM_SQUARES_PER_SIDE);
