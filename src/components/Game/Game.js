import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  const handleSubmitGuess = function (tentativeGuess) {
    const nextGuess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    };
    if (tentativeGuess.length !== 5) return;

    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) setGameStatus('won');
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED)
      setGameStatus('lost');
  };

  return (
    <>
      {gameStatus}
      <Guesses guesses={guesses} answer={answer}></Guesses>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      ></GuessInput>
      {gameStatus !== 'running' && (
        <GameOverBanner
          gameStatus={gameStatus}
          answer={answer}
          numberOfGuesses={guesses.length}
        ></GameOverBanner>
      )}
    </>
  );
}

export default Game;
