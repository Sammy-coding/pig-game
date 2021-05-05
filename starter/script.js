'use strict';
/*
var scores, roundScore, activePlayer, gamePlaying;
init();

document.querySelector('.btn--roll').addEventListener('click', function() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;

    } else {
        nextPlayer();
    }
}
    
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
}
    
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', function(){
    init();
    
});

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}

*/

var scores, roundScore, activePlayer, previousScore, gamePlaying;
init();

document.querySelector('.btn--roll').addEventListener('click', function() {
    if(gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var diceDom1 = document.querySelector('.dice-0');
        var diceDom2 = document.querySelector('.dice-1');
        diceDom1.style.display = 'block';
        diceDom2.style.display = 'block';
        diceDom1.src = 'dice-' + dice1 + '.png';
        diceDom2.src = 'dice-' + dice2 + '.png';
        var dice = dice1 + dice2;
        previousScore = dice;
        document.querySelector('#previous-score-' + activePlayer).textContent = previousScore;
        
        if (previousScore === 6 && dice === 6){
            scores[activePlayer] = 0 ;
            document.querySelector('#score--' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice1 !== 1 && dice2 !== 1) {
                roundScore += dice;
                document.querySelector('#current--' + activePlayer).textContent = roundScore;
        } else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click', function() {
    if(gamePlaying){
        scores[activePlayer] += roundScore;
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]; 

    var input = document.querySelector('.final-score').value;
    var winningScore;
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }

    if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice-0').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
        
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        gamePlaying = false;

    } else{
        nextPlayer();
    }
    }
});

document.querySelector('.btn--new').addEventListener('click', function() {
    init();
});

function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.querySelector('#current--0').textContent = '0';
        document.querySelector('#current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice-0').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
}

function init() {
    scores = [0,0];
    roundScore = 0;
    previousScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('previous-score-0').textContent = '0';
    document.getElementById('previous-score-1').textContent = '0';
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}





























