import { leaderboardApiURL, gameId, user, score } from './variables.js'

const addPlayer = async (gameId) => {
    let response = await fetch(`${leaderboardApiURL}/${gameId}/scores/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: user.value,
            score: score.value
        }),
    })
    const data = await response.text();
    return data;
}

export default addPlayer;