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
    drawSnake();
    drawSnake();
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

function move() {
    const head = {...snake[0]};
    switch (direction) {
        case 'right':
            head.x++;
            break;
        case 'left':
            head--;
            break;
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
    }

    sneak.unshift(head);

    snake.pop();

    if(head.x === food.x && head.y === food.y){
        food = generateFood();
        increaseSpeed();
        clearInterval(gameInterval)
        gameInterval = setInterval(() => {
            move();
            checkCollision();
            draw();
        }, gameSpeedDelay);
    } else {
        snake.pop();
    }
}

function startGame() {
    gameStarted = true;
    instructionText.style.display = 'none';
    gameInterval = setInterval(() => {
        move();
        draw();
    }, gameSpeedDelay);
}
