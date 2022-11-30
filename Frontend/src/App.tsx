import React, {useEffect} from 'react';
import './App.css';

const QueryBackend = async () => {
  const response = await fetch("http://127.0.0.1:3000/ksql", {mode:'cors'})
  const backendResponse = await response.json();
  console.log(backendResponse)
}

function App() {
  useEffect(() => {
    QueryBackend()
  });
  return (
    <div className="App">
      <header className="App-header">
        <div className="buttonIn">
          <input type="text" id="enter" placeholder="Enter a topic"/>
          <button id="query">Query</button>
        </div>
      </header>
    </div>
  );
}

export default App;
