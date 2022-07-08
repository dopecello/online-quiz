const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')

let highScores = JSON.parse(localStorage.getItem('score')) || []

finalScore.innerText = highScores

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveScoreBtn.addEventListener('click', saveHighScore)

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: highScores,
        name: username.value
    }

highScores.push(score)

highScores.sort((a,b) => {
    return b.score - a.score
})

highScores.splice(5)

localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.replace("./end.html")
}