//creating a class for the memory game
//this is used to mention that this belongs to the class so it can be used anywhere on the class
//here this refers to the memorygame class
class MemoryGame {
  constructor(totaltime, cards) {
    //These parameters are passed from the html
    this.cardsarray = cards; //storing the array of cards into the cardsarray
    this.totaltime = totaltime;
    this.timeremaining = totaltime;
    this.timer = document.getElementById("time-remaining");
    this.flips = document.getElementById("flips");
  }
  startGame() {
    this.totalclicks = 0;
    this.timeremaining = this.totaltime;
    this.cardtocheck = null; //because it is the start of the game
    this.matchedcards = []; //to store the matched cards
    this.busy = true;
    setTimeout(() => {
      this.shuffle(this.cardsarray); //to shuffle the images on the cards at the start of everygame
      this.countdown = this.startCountdown(); //to start the countdown timer
      this.busy = false;
    }, 500); //This function is to call functions after a particular time
    this.hideCards();
    this.timer.innerText = this.timeremaining; //to change the text inside the html
    this.flips.innerText = this.totalclicks;
  }
  startCountdown() {
    return setInterval(() => {
      this.timeremaining--;
      this.timer.innerText = this.timeremaining;
      if (this.timeremaining === 0) this.gameOver(); //if the timer reaches 0 the game is over
    }, 1000); //To do something over an interval of 1 s
  }
  gameOver() {
    clearInterval(this.countdown);
    var gameover = document.getElementById("gameover");
    gameover.classList.add("visible");
  }
  victory() {
    clearInterval(this.countdown);
    var victory = document.getElementById("victory");
    victory.classList.add("visible");
  }
  hideCards() {
    this.cardsarray.forEach((card) => {
      card.classList.remove("visible");
      card.classList.remove("matched");
    });
  }
  flipCard(card) {
    //the function to flip the cards
    if (this.canFlipCard(card)) {
      this.totalclicks++;
      this.flips.innerText = this.totalclicks;
      card.classList.add("visible");

      if (this.cardtocheck) {
        this.checkForCardMatch(card);
      } else {
        this.cardtocheck = card;
      }
    }
  }
  checkForCardMatch(card) {
    //to check whether it is matching or not
    if (this.getCardType(card) === this.getCardType(this.cardtocheck))
      this.cardMatch(card, this.cardtocheck);
    else this.cardMismatch(card, this.cardtocheck);

    this.cardtocheck = null;
  }
  cardMatch(card1, card2) {
    //if it is matched
    this.matchedcards.push(card1);
    this.matchedcards.push(card2);
    // Uncomment for dancing animation when cards match
    // card1.classList.add("matched");
    // card2.classList.add("matched");
    if (this.matchedcards.length === this.cardsarray.length) this.victory(); //if all the card matches then it is victory
  }
  cardMismatch(card1, card2) {
    //if it is not matched
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 1000);
  }
  shuffle(cardsarray) {
    // Fisher-Yates Shuffle Algorithm.(to shuffle the cards)
    for (let i = cardsarray.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      cardsarray[randIndex].style.order = i;
      cardsarray[i].style.order = randIndex;
    }
  }
  getCardType(card) {
    return card.getElementsByClassName("card-value")[0].src;
  }
  canFlipCard(card) {
    return (
      !this.busy &&
      !this.matchedcards.includes(card) &&
      card !== this.cardtocheck
    );
  }
}
//eventlistener to load the js after the page loads
window.onload = pageReady;

function pageReady() {
  let overlay = Array.from(document.getElementsByClassName("overlay-text"));
  let cards = Array.from(document.getElementsByClassName("cards")); //The array from function is used to make the elements of html into an array
  let game = new MemoryGame(60, cards); //Creating a variable that is an instance of the memorygame class

  overlay.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
      game.startGame();
    }); //The for each function is used to add event listener of click on each overlays (start,restart) in the overlays array
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      game.flipCard(card);
    }); //The for each function is used to add event listener of click on each cards in the cards array
  });
}
