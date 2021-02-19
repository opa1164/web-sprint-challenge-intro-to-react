import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character.js';
const { default: axios } = require("axios");

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const[characters, setCharacters] = useState([]);

  useEffect(()=> {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      setCharacters(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  });

  const charContainer = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "50%",
    padding:"20px",
    margin: "0 auto",
  }

  console.log(characters);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div style = {charContainer}> 
        {characters.map(id =>
          <Character character = {id}/>
        )}
      </div>
    </div>
  );
}

export default App;
