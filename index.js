let start = document.getElementById("start")
let cards = document.getElementById("cards")
let sumCards = document.getElementById("sumCard")
let player = document.getElementById("player")
let isAlive = false
let hasBlackJack = false
let totalCards = []
let sum = 0
let profile = {
    name: "Dona",
}
let chips = 200

player.textContent = profile.name + " : " + chips + " $"
function randomNumber(){
    return Math.floor(Math.random() *13 + 1)
}

function startGame(){
  let cardOne = randomNumber()
  let cardTwo = randomNumber()
  totalCards = [cardOne, cardTwo]
  sum = cardOne + cardTwo
  renderGame()
}

function renderGame() {
    cards.textContent = "Your Cards:  " 
    for (let i= 0; i < totalCards.length; i++){
        cards.textContent += totalCards[i] + "    " 
    }
    sumCards.textContent = "Sum:  " + sum

  if (sum < 21) {
    start.textContent = "Please choose the next cards 🤑"
    isAlive = true
    chips += 0
  } else if (sum === 21) {
    start.textContent = "Whoa you've got the black Jack 🥳"
    hasBlackJack = true
    chips += 25
  } else {
    start.textContent = "You lose the game! 😅"
    isAlive = false
    chips -= 25
  }
  player.textContent = profile.name + " : " + chips + " $"
}

function nextCard() {
    if (hasBlackJack === false && isAlive === true){
        let card = randomNumber()
        sum += card
        totalCards.push(card)
        renderGame()
    }
}