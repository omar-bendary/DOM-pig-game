/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentScore, globalScore, activePlayer, gamePlaying;

start();

//Rolling Dice
document.querySelector(".btn-roll").addEventListener('click', function () {
    if (gamePlaying) {

        document.querySelector(".dice").style.display = "block";  // unhide the dice
        var dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice").src = 'dice-' + dice + '.png';



        if (dice !== 1) {
            currentScore += dice;
            document.getElementById("current-" + activePlayer).textContent = currentScore;

        } else {

            nextPlayer();


        }


    }
});




document.querySelector(".btn-hold").addEventListener('click', hold);

//Hold Function

function hold() {
    globalScore[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById("score-" + activePlayer).textContent = globalScore[activePlayer];
    document.getElementById("current-" + activePlayer).textContent = currentScore;
    if (globalScore[activePlayer] >= 10) {
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.getElementById("name-" + activePlayer).textContent = 'WINNER !!!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector(".dice").style.display = "none";
        gamePlaying = false;



    } else {
        nextPlayer();
    }


}


document.querySelector(".btn-new").addEventListener('click', start);

function start() {
    currentScore = 0;
    globalScore = [0, 0];
    activePlayer = 0;
    gamePlaying = true;

    //set values in start

    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".dice").style.display = "none"; // hide the dice
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById("name-0").textContent = 'Player 1';
    document.getElementById("name-1").textContent = 'Player 2';


}




//next Player
function nextPlayer() {
    document.getElementById("current-" + activePlayer).textContent = 0;


    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;

    }
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector(".dice").style.display = "none";


}


