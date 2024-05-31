'use strict';
//selecting elements
const dice_DOM = document.querySelector('.dice');
const btnNew_DOM = document.querySelector('.btn--new');
const btnRoll_DOM = document.querySelector('.btn--roll');
const btnHold_DOM = document.querySelector('.btn--hold');
const currentScore0_DOM = document.querySelector('#current--0');
const currentScore1_DOM = document.querySelector('#current--1');
const score0_DOM = document.querySelector('#score--0');
const score1_DOM = document.querySelector('#score--1');
const player0Section_DOM = document.querySelector('.player--0');
const player1Section_DOM = document.querySelector('.player--1');
//default game starter conditions
score0_DOM.textContent = 0;
score1_DOM.textContent = 0;
dice_DOM.classList.add('hidden');

let currScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
//------------------------------- FUNCTIONS --------------------------
const switchplayer = () => {
  currScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Section_DOM.classList.toggle('player--active');
  player1Section_DOM.classList.toggle('player--active');
};
const diceGenerator = () => {
  if (playing) {
    let rndNumber = Math.trunc(Math.random() * 6) + 1; //1-6 közötti szám
    console.log(typeof rndNumber, rndNumber);

    dice_DOM.classList.remove('hidden');
    dice_DOM.src = `dice-${rndNumber}.png`;
    //diceRoll(rndNumber); //same solution
    if (rndNumber > 1) {
      //increment currentscore
      currScore += rndNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else if (rndNumber === 1) {
      // switch next player & set 0 currentscore
      switchplayer();
    }
  }
};
const diceRoll = rndNum => {
  switch (rndNum) {
    case (rndNum = 6):
      dice_DOM.src = `dice-${rndNum}.png`;
      break;
    case (rndNum = 5):
      dice_DOM.src = `dice-${rndNum}.png`;
      break;
    case (rndNum = 4):
      dice_DOM.src = `dice-${rndNum}.png`;
      break;
    case (rndNum = 3):
      dice_DOM.src = `dice-${rndNum}.png`;
      break;
    case (rndNum = 2):
      dice_DOM.src = `dice-${rndNum}.png`;
      break;
    case (rndNum = 1):
      dice_DOM.src = `dice-${rndNum}.png`;
      break;
    default:
      diceResult = 'nem létező dobókocka szám';
  }
  console.log(rndNum, dice_DOM.src);
  return dice_DOM.src;
};
const holdYourScore = () => {
  if (playing) {
    //active player score
    scores[activePlayer] += currScore;
    //  console.log(scores[activePlayer], currScore);
    document.getElementById(`current--${activePlayer}`).textContent =
      scores[activePlayer];
    //<=100 above the player win
    player0Section_DOM.classList.contains('player--active')
      ? (score0_DOM.textContent = scores[activePlayer])
      : (score1_DOM.textContent = scores[activePlayer]);
    //switch player when holded score
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice_DOM.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    switchplayer();
  }
};
const reset = () => {
  currentScore0_DOM.textContent = 0;
  currentScore1_DOM.textContent = 0;
  score0_DOM.textContent = 0;
  score1_DOM.textContent = 0;
  player0Section_DOM.classList.remove('player--winner');
  player1Section_DOM.classList.remove('player--winner');
  player0Section_DOM.classList.add('player--active');
  player1Section_DOM.classList.remove('player--active');
};

//Click events

//rolling dice funcionality
btnRoll_DOM.addEventListener('click', diceGenerator);
//hold score
btnHold_DOM.addEventListener('click', holdYourScore);
//reset and start new game
btnNew_DOM.addEventListener('click', reset);
