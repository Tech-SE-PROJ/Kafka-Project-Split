import React, {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch("<http://127.0.0.1:3000/ksql>")
    .then((response) => response.json())
    .then((response) => console.log(response))
    }
  )
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
