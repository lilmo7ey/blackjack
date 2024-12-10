let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = [];
let sum = 0;

let player = {
  name: "Loay",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards.join(", ");
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    adjustForAce(); 
    renderGame();
  }
}

function adjustForAce() {
  if (sum > 21 && cards.includes(11)) {
    cards[cards.indexOf(11)] = 1;
    sum -= 10;
  }
}


// let message = [
//   "hey, how's it going?",
//   "im great ",
//   "all good",
//   "same here"
// ]

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i++) {
//   console.log(cards[i])
// }

// let sentence = ["hello", "name", "is", "Loay"]
// let greetingEl = document.getElementById("message-el")

// for (let i = 0; i < sentence.length; i++) {
//    greetingEl.textContent += " " + sentence[i]
// }


// let player1TIme = 102
// let player2Time = 10



// function getFastestRaceTime(){
//   if (player1TIme < player1TIme) {
//     return player1TIme
//   } else if (player2Time < player1TIme) {
//     return player2Time
//   } else {
//     return player1TIme
//   }
// }
// let FastestRace = getFastestRaceTime()

// console.log(FastestRace)


// function totalRaceTime(){
//     return player1TIme + player2Time
// }

// let total = totalRaceTime()

// console.log(total)



// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6 ) + 1
//   return randomNumber
// }
// console.log(rollDice() )


// let hasSolvedChallenge = false 
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//  showSolution()
// }



// function showSolution(){
//   console.log("showing the solution")
// }


// let likeDocumentarie = false
// let likeStartups = true

// if (likeDocumentarie === true || likeStartups === true) {
//   recommendMove()
// }





// function recommendMove(){
//   console.log("Hey, sheck out thus new film we think you will like!")
// }


// let castle = {
//   title: "live like a king",
//   price: 190,
//   isSuperHost: true,
//   images: ["img/catle1.png"]


// }

// console.log(castle.price)

     