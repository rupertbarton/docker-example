import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [text, setText] = useState("")

  useEffect(() => {
    axios(process.env.REACT_APP_SERVER_LOCATION)
      .then((response) => setText(response.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
