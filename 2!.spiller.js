//variabler
let ballX;
let ballY;
let ballBredde = 15;
let ballHøyde = 15;

let spiller1x = 10;
let spiller1y = 250;

let spiller2x = 890;
let spiller2y = 250;

let spillerbredde = 20;
let spillerhøyde = 100;
let spillerSpeed = 5;

function setup() {
    createCanvas(900, 500);

    rectMode(CENTER);
    ballX = width / 2;
    ballY = height / 2;
}

function draw() {
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
