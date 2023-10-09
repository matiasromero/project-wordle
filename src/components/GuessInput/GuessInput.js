import React from 'react';

function GuessInput({ guess, setGuess, setGueeses }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length === 5) {
          setGueeses((prevGuesses) => [...prevGuesses, guess]);
          setGuess('');
        }
      }}
      className='guess-input-wrapper'
    >
      <label htmlFor='guess'>Guess a letter:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        pattern='[A-Z]{5}'
        title='5 characters only'
        onChange={(e) => {
          e.target.value = e.target.value.toUpperCase();
          setGuess(e.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
