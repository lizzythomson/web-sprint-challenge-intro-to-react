import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Characters from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log("Error occurred in useEffect: ", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters === null ? (
        <h2>Loading...</h2>
      ) : (
        <div className="Character-Container">
          <Characters characters={characters} />
        </div>
      )}
    </div>
  );
};

export default App;
