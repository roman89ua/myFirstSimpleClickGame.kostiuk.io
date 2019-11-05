let xLine = 0,
    yLine = 0,
    step = 50,
    a, b, c, d;
let toMove = document.getElementById('move');



//moves div from left top angle to right top angle
function moveRight() {

    toMove.style.marginLeft = xLine + "px";
    if (xLine > 200) {
        clearInterval(a);
        b = setInterval(moveDown, step);
    }
    xLine += 2;
}

//moves div from top to bottom at the right side
function moveDown() {
    toMove.style.marginTop = yLine + 'px';
    if (yLine > 200) {
        clearInterval(b);
        c = setInterval(moveLeft, step);
    }
    yLine += 2;
}

//moves div from right side to the left side
function moveLeft() {
    toMove.style.marginLeft = xLine + "px";
    if (xLine <= 0) {
        clearInterval(c);
        d = setInterval(moveUp, step);
    }
    xLine -= 2;
}

// moves div up on yLine from the bottom 
function moveUp() {
    toMove.style.marginTop = yLine + 'px';
    if (yLine <= 0) {
        clearInterval(d);
        a = setInterval(moveRight, step);
    }
    yLine -= 2;
}

//button start
let interval = document.getElementById('start').onclick = function() {
    a = setInterval(moveRight, step);
}

//button stop
let stopButton = document.getElementById('stop').onclick = function() {
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
    clearInterval(d);
}

//makes div move faster on each click at div
let getP = document.getElementById('p');
let clickMeIfYouCan = document.getElementById('move').onclick = function() {
    stopButton();
    step -= 5;
    if (step == 45) {
        getP.innerHTML = '9 clickes to win';
    } else if (step == 40) {
        getP.innerHTML = '8 clickes to win';
    } else if (step == 35) {
        getP.innerHTML = '7 clickes to win';
    } else if (step == 30) {
        getP.innerHTML = '6 clickes to win';
    } else if (step == 25) {
        getP.innerHTML = '5 clickes to win';
    } else if (step == 20) {
        getP.innerHTML = '4 clickes to win';
    } else if (step == 15) {
        getP.innerHTML = '3 clickes to win';
    } else if (step == 10) {
        getP.innerHTML = '2 clickes to win';
    } else if (step == 5) {
        getP.innerHTML = '1 click to go';
    } else if (step == 0) {
        getP.innerHTML = 'You Win!!!';
    }
    interval();
    if (step <= 0) {
        stopButton();
        alert('You win!!!!Congretes!!!!');
    }
}