//variabler
let ballX;
let ballY;
let ballBredde = 15;
let ballHøyde = 15;
let ballSpeed = 2;
let ballDirectionX = 1;
let ballDirectionY = 1;

let spiller1x = 10;
let spiller1y = 250;

let spiller2x = 890;
let spiller2y = 250;

let spillerbredde = 20;
let spillerhøyde = 100;
let spillerSpeed = 5;

let poengspiller1 = 0;
let poengspiller2 = 0;

function setup() {
    createCanvas(900, 500);

    rectMode(CENTER);
    ballX = width / 2;
    ballY = height / 2;

    textAlign(CENTER);
}

function draw() {
    pong();
}

function pong() {
    keyTyped();
    keyPressed();

    background(0);
    noFill();
    stroke(255);
    rect(width / 2, height / 2, width, height);
    line(450, 0, 450, height);

    fill(255);
    noStroke();

    rect(ballX, ballY, ballBredde, ballHøyde);

    rect(spiller1x, spiller1y, spillerbredde, spillerhøyde);
    rect(spiller2x, spiller2y, spillerbredde, spillerhøyde);

    ballX = ballX + ballDirectionX * ballSpeed;
    ballY = ballY + ballDirectionY * ballSpeed;

    if (ballY >= height) {
        ballDirectionY *= -1;
    }

    if (ballY <= 0) {
        ballDirectionY *= -1;
    }

    if (
        ballX > spiller1x - 10 &&
        ballX <= spiller1x + 10 &&
        ballY >= spiller1y - 50 &&
        ballY <= spiller1y + 50
    ) {
        ballDirectionX *= -1;
    }

    if (
        ballX > spiller2x - 10 &&
        ballX <= spiller2x + 10 &&
        ballY >= spiller2y - 50 &&
        ballY <= spiller2y + 50
    ) {
        ballDirectionX *= -1;
    }

    textSize(25);
    text(poengspiller1, 400, 25);
    text(poengspiller2, 500, 25);

    if (ballX <= 0) {
        poengspiller2 += 1;
        ballX = width / 2;
        ballY = height / 2;
    }

    if (ballX >= width) {
        poengspiller1 += 1;
        ballX = width / 2;
        ballY = width / 2;
    }
}

function keyTyped() {
    if (key == "w" && keyIsPressed) {
        spiller1y -= spillerSpeed;
    }

    if (key == "s" && keyIsPressed) {
        spiller1y += spillerSpeed;
    }
}

function keyPressed() {
    if (keyCode == LEFT_ARROW && keyIsPressed) {
        spiller2y -= spillerSpeed;
    }

    if (keyCode == RIGHT_ARROW && keyIsPressed) {
        spiller2y += spillerSpeed;
    }
}
