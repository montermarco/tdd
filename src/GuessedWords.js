import React from 'react';
import PropTypes from 'prop-types';

const GuessWord = (props) => {
  
  let contents;
  if(props.guessedWords.length === 0){
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    );
  } else {
    const guessedWordsRow = props.guessedWords.map( (word,idx) => (
      <tr key={idx} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching letters</th>
            </tr>
          </thead>
          <tbody>
            { guessedWordsRow }
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  )
}

GuessWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessWord;
