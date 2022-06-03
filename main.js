let x = 0;
let y = 0;
speedX = 5;
speedY = 4;

let a = 160;
let b = 160;

function setup() {
    createCanvas(400, 400);
}

function reset() {
    x = width / 2;
    y = height / 2;
}

function draw() {
    background(220);
    rect(10, a, 10, 80);
    rect(380, b, 10, 80);
    line(200, 0, 200, 400);
    ellipse(x, y, 30, 30);

    if (x > width) {
        reset();
    }

    if (x < 0) {
        reset();
    }

    if (y > height) {
        speedY = -speedY;
    }

    if (y < 0) {
        speedY = -speedY;
    }

    x = x + speedX;
    y = y + speedY;

    if (keyIsDown(LEFT_ARROW)) {
        a += 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        a -= 5;
    }

    if (keyIsDown(65)) {
        b += 5;
    }

    if (keyIsDown(83)) {
        b -= 5;
    }
}

function paddle() {
    if (x > a && x < a + 80 && y + 10 >= 375) {
        speedX *= -1;
        speedY *= -1;
    }
}
