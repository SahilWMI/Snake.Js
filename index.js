const BOARD_SIZE = 20;
const CELL_SIZE = 15;
const INITIAL_SNAKE_LENGTH = 3;

let snake = [];
let direction = 'right';
let food = [];
let score = 0;

const gameBoard = document.getElementById("game-board");

function initGame(){
    gameBoard.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, ${CELL_SIZE}px)`;
    gameBoard.style.gridTemplateAreas = `repeat(${BOARD_SIZE}, ${CELL_SIZE}px)`;

    for (let i = 0; i < INITIAL_SNAKE_LENGTH; i++) {
        snake.push({x: INITIAL_SNAKE_LENGTH - 1 - i, y: 0});
    }

    placeFood();
    gameLoop();
}

function gameLoop() {
    moveSnake();
    drawGame();
    setTimeout(gameLoop, 100);
}

initGame(); 
