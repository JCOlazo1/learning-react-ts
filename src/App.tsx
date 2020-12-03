import React, { useState } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [joke, setJoke] = useState("");
  const [jokeId, setJokeId] = useState(0);
  // Axios retrieving from an API
  const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      console.log(response);
      setJoke(response.data.setup + " ... " + response.data.punchline);
      setJokeId(response.data.id);
    })
  }



  return (
    <>
      <div className="counter-container">
        Simple Counter: {count}

        <button onClick={() => setCount(currentValue => currentValue + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      < hr />
      <div className="logger-container">
        User Input:
        {/**USER EMAIL */}
        <input
          name='email'
          value={email}
          placeholder='email'
          onChange={something => setEmail(something.target.value)}
        />
        {/**USER PASSWORD */}
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={something => setPassword(something.target.value)} />
      </div>
      <hr />
      <div className="api-container">
        <button onClick={getJoke}>Click for a joke</button>
        {joke}
        <br />
        This is joke number {jokeId}
      </div>
    </>
  );
}

export default App;
