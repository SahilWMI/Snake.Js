const BOARD_SIZE = 20;
const CELL_SIZE = 15;
const INITIAL_SNAKE_LENGTH = 3;

let gridSize = 20;
let snake = [{x: 10,y: 10}];
let direction = 'right';
let food = [];
let score = 0;

const board = document.getElementById("game-board");

function draw() {
    board.innerHTML = '';
}
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div',
        'snake');
        setPosition(snakeElement, segment);     
    });
}

function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function setPosition(element, position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;    
}

function drawFood() {
    const foodElement = createGameElement('div','food');
    setPosition(foodElement, food)
    board.appendChild(foodElement);
}

function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return {x, y};
}
