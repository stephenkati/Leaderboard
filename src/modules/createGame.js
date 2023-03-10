import { leaderboardApiURL} from './variables.js';

let gameId;

const createGame = async () => {
  const response = await fetch(leaderboardApiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'League of Legends',
    }),
  });
  
  const data = await response.text();
  gameId = data.slice(25, 45);
  return gameId;
};

export default createGame;
