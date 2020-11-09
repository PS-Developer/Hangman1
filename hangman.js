class Hangman {
    constructor (word, remGuess) {
        this.word = word.toLowerCase().split('')
        this.remGuess = remGuess
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        let finished = true

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter)) {

            } else {
                finished = false
            } 
        })


        if (this.remGuess === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
        }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remGuess}`
        } else if (this.status === 'failed') {
            return `Nice try, the word was"${this.word.join('')}",`
        } else {
            return `Great work, you guessed the word.`
        }
    }
    get puzzle() {
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
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const badGuess = !this.word.includes(guess)

        if(this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && badGuess) {
            this.remGuess--
        }
        this.calculateStatus()
    }
}

// const Hangman = function(word, remGuess) {
//     this.word = word.toLowerCase().split('')
//     this.remGuess = remGuess
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Hangman.prototype.calculateStatus = function() {
//    //Alt way to handle this with .every method
// //    const finished = this.word.every((letter) => {
// //        return this.guessedLetters.includes(letter)
// //    })
   
//     let finished = true

//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter)) {

//         } else {
//             finished = false
//         } 
//     })


//     if (this.remGuess === 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }

// Hangman.prototype.getStatusMessage = function () {
//     if (this.status === 'playing') {
//         return `Guesses left: ${this.remGuess}`
//     } else if (this.status === 'failed') {
//         return `Nice try, the word was"${this.word.join('')}",`
//     } else {
//         return `Great work, you guessed the word.`
//     }
// }

// Hangman.prototype.getPuzzle = function() {
//     let puzzle = ''

//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter) || letter === ' ') {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })
//     return puzzle
// }



// Hangman.prototype.makeGuess = function(guess) {
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const badGuess = !this.word.includes(guess)

//     if(this.status !== 'playing') {
//         return
//     }

//     if (isUnique) {
//         this.guessedLetters.push(guess)
//     }

//     if (isUnique && badGuess) {
//         this.remGuess--
//     }
//     this.calculateStatus()
// }

