import './style.css';
import createGame from './modules/createGame.js';
import addPlayer from './modules/addPlayer.js';
import {
  gameId, user, score, form, allScores, scoreList, leaderboardApiURL,
} from './modules/variables.js';

if (!gameId) { createGame(); }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addPlayer(gameId);
  user.value = '';
  score.value = '';
});

const refresh = document.querySelector('#refresh');
let result;

const getScoreList = async () => {
  const response = await fetch(`${leaderboardApiURL}/${gameId}/scores/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  result = await data.result;

  result.forEach((element) => { allScores.innerHTML += ` <li>${element.user} <span>${element.score}</span></li> `; });
};

allScores.classList.add('allScores');
refresh.addEventListener('click', () => {
  allScores.innerHTML = '';
  getScoreList();
});
scoreList.appendChild(allScores);
