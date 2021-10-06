import Congrats from './Congrats';
import GuessWords from './GuessedWords';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Guess the Word game!</h1>
      <Congrats success={true}/>
      <GuessWords guessedWords={[{guessedWord: 'techno', letterMatchCount: 4}]}/>
    </div>
  );
}

export default App;
