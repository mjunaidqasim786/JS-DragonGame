score = 0;
cross = true;
music = 0;
firstLoad = 0;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
options = document.querySelector('.options')
options.innerHTML="PLAY SOUND";
load  = document.querySelector('.single')
load.innerHTML="START GAME";
displayMainMenu();
// setTimeout(() => {
//     audio.play();
// }, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
var lol =document.getElementById(('obstacleAni'));
function prick1(){
  window.location.reload();
}
function stopGame() {
    obstacle = document.querySelector('.obstacle');
    obstacle.classList.remove('obstacleAni');
}
function playGame() {
    document.getElementById("gameContainer").style.display='block';
    document.getElementById("allthethings").style.display='none';
    obstacle = document.querySelector('.obstacle');
    obstacle.classList.add('obstacleAni'); 
}
function displayMainMenu() {
 stopGame()
 document.getElementById("gameContainer").style.display='none';
 document.getElementById("allthethings").style.display='block';

}
function puaseSound() {
    if(music == 0) {
        music = 1;
        audio.play();
        options.innerHTML="PAUSE SOUND";

    }
    else {
        music = 0;
        audio.pause();
        options.innerHTML="PLAY SOUND";
    }
    
}

function displayResume() {
    if(firstLoad == 0) {
        firstLoad = 1;
        playGame();
        load.innerHTML="RESUME GAME";

    }
    else {
        playGame();
        // load.innerHTML="PLAY GAME";
    }
}