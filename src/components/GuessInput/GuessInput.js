import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (tentativeGuess.length === 5) {
          handleSubmitGuess(tentativeGuess);
          setTentativeGuess('');
        }
      }}
      className='guess-input-wrapper'
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={tentativeGuess}
        disabled={gameStatus !== 'running'}
        pattern='[A-Z]{5}'
        title='5 characters only'
        required
        onChange={(e) => {
          e.target.value = e.target.value.toUpperCase();
          setTentativeGuess(e.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
