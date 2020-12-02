'use strict';

const buttonsBox = document.querySelector('.btn-container');
const resultsBox = document.querySelector('.results-container');
let resultsStr = document.querySelector('.round-result');
let resultsNpcStr = document.querySelector('.npc-choice');
let currentPlStatsEl = document.querySelector('.current-player-stats');
let currentNpcStatsEl = document.querySelector('.current-npc-stats');
let totalPlScoreEl = document.querySelector('.player-total-score');
let totalNpcScoreEl = document.querySelector('.npc-total-score');
let selectedBtn;
let roundNum = 0;
let playerPoints = 0;
let npcPoints = 0;
let totalPlScore = 0;
let totalNpcScore = 0;
let npcChoice = '';

currentPlStatsEl.textContent = 'Your wins: 0';
currentNpcStatsEl.textContent = 'Computer\'s wins: 0';
totalNpcScoreEl.textContent = 'Computer: ' + totalNpcScore;
totalPlScoreEl.textContent = 'You: ' + totalPlScore;

buttonsBox.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'BUTTON') {
    return;
  }

  highlight(target); // подсветить кнопку
  npcChoice = npc();
  round(target); // запустить проверку очков и след раунд
};

function highlight(el) {
  if (selectedBtn) { // убрать существующую подсветку, если есть
    selectedBtn.classList.remove('highlight');
  }

  selectedBtn = el;
  selectedBtn.classList.add('highlight'); // подсветить новую кнопку
  setTimeout(() => {
    selectedBtn.classList.remove('highlight');
  }, 2000);
}

// ===========================
// вспомогательные функции
// ===========================
  
function npc() {
  const arr = ['Rock', 'Paper', 'Scissors'];
  let npcChoice = Math.floor(Math.random() * Math.floor(3));

  return arr[npcChoice];
}

function round(el) {
  let playerChoice = el.textContent;

  if (playerChoice === npcChoice) {
    setTimeout(() => {
      resultsNpcStr.textContent = 'Computer: ' + npcChoice;
      resultsStr.textContent = 'Round draw';
      resultsBox.style.backgroundColor = 'yellow';
    }, 1000);

    return;
  }

  if (playerChoice === 'Rock') {
    if (npcChoice === 'Paper') {
      setTimeout(() => {
        roundNum += 1;
        npcPoints += 1;

        if (winnerCheck(playerPoints, npcPoints) === 'end') {
          roundNum = 0;
          npcPoints = 0;
          playerPoints = 0;

          return;
        }

        resultsNpcStr.textContent = 'Computer: ' + npcChoice;
        resultsStr.textContent = 'Round ' + roundNum + ', ' + playerChoice + ' vs ' + npcChoice + ', You\'ve LOST!';
        resultsBox.style.backgroundColor = '#95435B';
        currentNpcStatsEl.textContent = 'Computer\'s wins: ' + npcPoints;
      }, 1000);

      return;
    } else {
      setTimeout(() => {
        roundNum += 1;
        playerPoints += 1;

        if (winnerCheck(playerPoints, npcPoints) === 'end') {
          roundNum = 0;
          npcPoints = 0;
          playerPoints = 0;
          
          return;
        }

        resultsNpcStr.textContent = 'Computer: ' + npcChoice;
        resultsStr.textContent = 'Round ' + roundNum + ', ' + playerChoice + ' vs ' + npcChoice + ', You\'ve WIN!';
        resultsBox.style.backgroundColor = '#5B9543';
        currentPlStatsEl.textContent = 'Your wins: ' + playerPoints;
      }, 1000);

      return;
    }
  }

  if (playerChoice === 'Paper') {
    if (npcChoice === 'Scissors') {
      setTimeout(() => {
        roundNum += 1;
        npcPoints += 1;

        if (winnerCheck(playerPoints, npcPoints) === 'end') {
          roundNum = 0;
          npcPoints = 0;
          playerPoints = 0;
          
          return;
        }

        resultsNpcStr.textContent = 'Computer: ' + npcChoice;
        resultsStr.textContent = 'Round ' + roundNum + ', ' + playerChoice + ' vs ' + npcChoice + ', You\'ve LOST!';
        resultsBox.style.backgroundColor = '#95435B';
        currentNpcStatsEl.textContent = 'Computer\'s wins: ' + npcPoints;
      }, 1000);

      return;
    } else {
      setTimeout(() => {
        roundNum += 1;
        playerPoints += 1;

        if (winnerCheck(playerPoints, npcPoints) === 'end') {
          roundNum = 0;
          npcPoints = 0;
          playerPoints = 0;
          
          return;
        }

        resultsNpcStr.textContent = 'Computer: ' + npcChoice;
        resultsStr.textContent = 'Round ' + roundNum + ', ' + playerChoice + ' vs ' + npcChoice + ', You\'ve WIN!';
        resultsBox.style.backgroundColor = '#5B9543';
        currentPlStatsEl.textContent = 'Your wins: ' + playerPoints;

      }, 1000);

      return;
    }
  }

  if (playerChoice === 'Scissors') {
    if (npcChoice === 'Rock') {
      setTimeout(() => {
        roundNum += 1;
        npcPoints += 1;

        if (winnerCheck(playerPoints, npcPoints) === 'end') {
          roundNum = 0;
          npcPoints = 0;
          playerPoints = 0;
          
          return;
        }

        resultsNpcStr.textContent = 'Computer: ' + npcChoice;
        resultsStr.textContent = 'Round ' + roundNum + ', ' + playerChoice + ' vs ' + npcChoice + ', You\'ve LOST!';
        resultsBox.style.backgroundColor = '#95435B';
        currentNpcStatsEl.textContent = 'Computer\'s wins: ' + npcPoints;
      }, 1000);

      return;
    } else {
      setTimeout(() => {
        roundNum += 1;
        playerPoints += 1;

        if (winnerCheck(playerPoints, npcPoints) === 'end') {
          roundNum = 0;
          playerPoints = 0;
          npcPoints = 0;
          
          return;
        }

        resultsNpcStr.textContent = 'Computer: ' + npcChoice;
        resultsStr.textContent = 'Round ' + roundNum + ', ' + playerChoice + ' vs ' + npcChoice + ', You\'ve WIN!';
        resultsBox.style.backgroundColor = '#5B9543';
        currentPlStatsEl.textContent = 'Your wins: ' + playerPoints;
      }, 1000);

      return;
    }
  }
}

function winnerCheck(playerPoints, npcPoints) {
  if (playerPoints === 2) {
    setTimeout(() => {
      totalPlScore += 1;
      resultsNpcStr.textContent = 'Computer: ' + npcChoice;
      resultsStr.textContent = '=== You won! ===';
      resultsBox.style.backgroundColor = '#5B9543';
      playerPoints = 0;
      npcPoints = 0;
      currentNpcStatsEl.textContent = 'Computer\'s wins: ' + npcPoints;
      currentPlStatsEl.textContent = 'Your wins: ' + playerPoints;
      totalPlScoreEl.textContent = 'You: ' + totalPlScore;
    }, 1000);

    return 'end';
  }

  if (npcPoints === 2) {
    setTimeout(() => {
      totalNpcScore += 1;
      resultsNpcStr.textContent = 'Computer: ' + npcChoice;
      resultsStr.textContent = '=== Computer won! ===';
      resultsBox.style.backgroundColor = '#95435B';
      playerPoints = 0;
      npcPoints = 0;
      currentNpcStatsEl.textContent = 'Computer\'s wins: ' + npcPoints;
      currentPlStatsEl.textContent = 'Your wins: ' + playerPoints;
      totalNpcScoreEl.textContent = 'Computer: ' + totalNpcScore;
    }, 1000);

    return 'end';
  }
}
