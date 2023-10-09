import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className='guess'>
      {range(5).map((index) => {
        return (
          <span className='cell' key={index}>
            {guess && guess[index]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
