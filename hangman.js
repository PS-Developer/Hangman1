class Hangman {
  constructor(word, remGuess) {
    this.word = word.toLowerCase().split("");
    this.remGuess = remGuess;
    this.guessedLetters = [];
    this.status = "playing";
  }
  calculateStatus() {
    let finished = true;

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter)) {
      } else {
        finished = false;
      }
    });

    if (this.remGuess === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remGuess}`;
    } else if (this.status === "failed") {
      return `Nice try, the word/sentence was"${this.word.join("")}",`;
    } else {
      return `Great work, you guessed the word/sentence.`;
    }
  }
  get puzzle() {
    let puzzle = "";

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const badGuess = !this.word.includes(guess);

    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (isUnique && badGuess) {
      this.remGuess--;
    }
    this.calculateStatus();
  }
}
