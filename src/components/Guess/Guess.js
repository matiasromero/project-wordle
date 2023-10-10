import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const cssClass = status ? `cell ${status}` : 'cell';
  return <span className={cssClass}>{letter}</span>;
}

function Guess({ value, answer }) {
  let result = checkGuess('', answer);
  if (value) {
    result = checkGuess(value.value, answer);
  }
  return (
    <p className='guess'>
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        ></Cell>
      ))}
    </p>
  );
}

export default Guess;
