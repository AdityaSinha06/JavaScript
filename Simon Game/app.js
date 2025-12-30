let gameSeq = [];
let userSeq = [];

//to maintain high-Score :: do not reset the score, after a loss; Also do not reload for another game;;
let highScore = 0;

let level = 0;
let started = false;
let score = 0;

let h4 = document.querySelector('h4');

//1. ------------press any key :- on document 
document.addEventListener("keydown" , function () {
    if(started == false) {
        console.log("Game has started");
        started = true;

//now game has started :: 2. any random flash + level increase + add that rndm btn to game Seq
        levelUp();
    }
})

// ==================================================================
function levelUp() {
//for that level specifically, new responses should be made 
    userSeq = [];

//level-Inc.
    level++;
    h4.innerText = `Level ${level}`;

//random-Btn-flash + add to gameSeq
    let currBtn_Num = Math.floor(Math.random() * 4) + 1;
    let currBtn = document.querySelector(`.btn${currBtn_Num}`);
    gameSeq.push(currBtn.className);
    btnFlash(currBtn);

    //de-bug
    console.log(gameSeq);
}

function btnFlash(btn) {
//add flash class then after some-time remove that class
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    } , 250);
}
// =====================================================================

function btnPressed() {
    let btn = this;
    userSeq.push(btn.className)
    userFlash(btn);

    matchResponse(userSeq.length-1);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    } , 250);
}

function matchResponse(idx) {
    if(userSeq[idx] === gameSeq[idx]) { //checks each response-> if the current response is correct 
        if(userSeq.length == gameSeq.length) { // if the responses length is same as gameSeq 
            ++score;                          // Level-Passed
            setTimeout(levelUp , 1000);
        }
    } else { // if the current made response is not same as current gameSeq :: you Lost;
        highScore = Math.max(highScore , score);
        h4.innerHTML = `Game Over!! Your score was ${score}. <br>High-Score: ${highScore} <br> Press any key to start`;
        document.body.style.backgroundColor = "red";
        setTimeout(function () {
            document.body.style.backgroundColor = "white";
        } , 250);

        reset();
    }
}

// ===================================================================
function reset() { // New Game reset
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    score = 0;
}


//----event Listeners----
let allBtns = document.querySelectorAll("#btn");
for (btn of allBtns) {
    btn.addEventListener("click" , btnPressed);
}