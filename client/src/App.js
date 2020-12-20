import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [word, setWord] = useState('');
  const [trad, setTrad] = useState('');

  async function handleClick() {
    const data = await window.fetch('/word');
    const json = await data.json();
    const word = json.word;
    setWord(word);
  }

  async function handleTrad(event) {
    const trad = event.target.value
    setTrad(trad);
  }

  async function handleSubmit(event) {
    alert(trad);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={handleClick}>
          Génerer un mots
        </button>
        <p>{word}</p>

        <form onSubmit={handleSubmit}>
          <label>
            Traduction :
            <input type="text" name="name" onChange={handleTrad}/>
          </label>
          <input type="submit" value="Envoyer" />
        </form>

      </header>
    </div>
  );
}

export default App;
