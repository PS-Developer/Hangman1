const Hangman = function(word, remGuess) {
    this.word = word.toLowerCase().split('')
    this.remGuess = remGuess
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const badGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && badGuess) {
        this.remGuess--
    }
}

