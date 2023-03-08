import { leaderboardApiURL, gameId } from './variables.js'

const createGame = async () => {
    let response = await fetch(leaderboardApiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "League of Legends"
        })
    })

    const data = await response.text();
    gameId = data.slice(25, 45);
    localStorage.setItem('gameId', gameId);
      
}

export default createGame;