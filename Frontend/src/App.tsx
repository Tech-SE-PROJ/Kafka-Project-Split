import React, {useEffect} from 'react';
import './App.css';

function resp() {
  fetch("http://127.0.0.1:3000/ksql")
    .then((response) => response)
    .then((response) => console.log(response))
}

  

function App() {
  useEffect(() => {
    resp()
  });
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
