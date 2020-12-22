import './App.css';
import React, {useState} from 'react';

function App() {

  const [word, setWord] = useState('');
  const [goodTrad, setGoodTrad] = useState('');
  const [clientTrad, setClientTrad] = useState('');
  var [compteur, setCompteur] = useState(10);
  var [end, setEnd] = useState('');

  // get a random word + trad and save in props
  async function generateWord() {
    const data = await window.fetch('/word');
    const json = await data.json();
    const word = json.word;
    const goodTrad = json.trad;
    setWord(word);
    setGoodTrad(goodTrad);
  }

  // save the client traduction
  async function handleTrad(event) {
    const clientTrad = event.target.value
    setClientTrad(clientTrad);
  }

  // when traduction submitted
  async function handleSubmit(event) {

    // good trad -> cpt + 1
    if (clientTrad === goodTrad) {
      setEnd('');
      compteur++;
      if (compteur === 20) {
          setEnd('Vous avez Gagné');
          compteur = 10;
      }
    }
    // bad trad -> cpt - 1
    else {
      setEnd('');
      compteur--;
      if (compteur < 1) {
        setEnd('Vous avez perdu');
        compteur = 10;
      }
    }
    setCompteur(compteur);
    generateWord();
  }

  return (
    <div className="App">
      <header className="App-header">

        <p>{end}</p>
        <p>Score : {compteur}</p>
        <button onClick={generateWord}>
          Génerer un mots
        </button>
        <p>{word}</p>

        <form method="POST">
          <label>
            <p>Traduire en anglais :</p>
            <input type="text" name="traduction" onChange={handleTrad}/>
          </label>
        </form>

        <p></p>
        <button onClick={handleSubmit}>
          Envoyer
        </button>

      </header>
    </div>
  );
}

export default App;
