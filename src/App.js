import {useEffect} from 'react';
import './App.css';
import Input from './Input';
import Congrats from './Congrats';
import GuessWords from './GuessedWords';
import { getSecretWord } from './actions'

function App() {

  // TODO - get props from shared state
  const success = false;
  const secretWord = 'techno';
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, [])

  return (
    <div className="container" data-test="app-component">
      <h1>Guess the Word game!</h1>
      <Congrats success={success}/>
      <Input success={success} secretWord={secretWord}/>
      <GuessWords guessedWords={guessedWords}/>
    </div>
  );
}

export default App;
//[{guessedWord: 'techno', letterMatchCount: 4}]