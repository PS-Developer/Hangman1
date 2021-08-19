fetch("https://puzzle.mead.io/puzzle")
  .then((res) => res.json())
  .then((data) => (newWord = data.puzzle))
  .then(() => newWord)
  .then(() => {
    const puzzleEl = document.querySelector("#puzzle");
    const guessesEl = document.querySelector("#guesses");

    const game1 = new Hangman(newWord, 4);

    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;

    window.addEventListener("keypress", function (e) {
      const guess = String.fromCharCode(e.charCode);
      game1.makeGuess(guess);
      puzzleEl.textContent = game1.puzzle;
      guessesEl.textContent = game1.statusMessage;
    });
  });
