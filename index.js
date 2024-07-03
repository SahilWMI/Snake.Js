const BOARD_SIZE = 20;
const CELL_SIZE = 15;
const INITIAL_SNAKE_LENGTH = 3;

let snake = [];
let direction = 'right';
let food = [];
let score = 0;

const board = document.getElementById("game-board");

function draw() {
    board.innerHTML = '';
}
function drawSnake() {

}
