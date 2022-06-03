let xBall = 200;
let yBall = 50;
let xSpeed = 2;
let ySpeed = 7;
let score = 0;

function setup() {
    createCanvas(400, 400);
}

//Background

function draw() {
    background(0);

    fill("#ffffff");
    rect(mouseX, 375, 90, 15);

    move();
    display();
    bounce();
    paddle();

    fill("#d9c3f7");
    textSize(24);
    text("Score: " + score, 10, 25);
}

function reset() {
    xBall;
}

function move() {
    xBall += xSpeed;
    yBall += ySpeed;
}

function bounce() {
    if (xBall < 10 || xBall > 400 - 10) {
        xSpeed *= -1;
    }
    if (yBall < 10 || yBall > 400 - 10) {
        ySpeed *= -1;
    }
}

function display() {
    fill("#d9c3f7");
    ellipse(xBall, yBall, 20, 20);
}

function paddle() {
    if (xBall > mouseX && xBall < mouseX + 90 && yBall + 10 >= 375) {
        xSpeed *= -1;
        ySpeed *= -1;
        score++;
    } else {
        reset();
    }
}
