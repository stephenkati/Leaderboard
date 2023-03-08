const leaderboardApiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const gameId = localStorage.getItem('gameId');

const user = document.querySelector('#name');
const score = document.querySelector('#score');
const form = document.querySelector('#form');

const scoreList = document.querySelector('.scoreList');
const allScores = document.createElement('ul');

export {
  leaderboardApiURL, gameId, user, score, form, scoreList, allScores,
};