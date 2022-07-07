const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')

let highScores = JSON.parse(localStorage.getItem('score')) || []

finalScore.innerText =