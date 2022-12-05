import React, {useEffect, Component} from 'react';
import './App.css';
import ButtonLoader from "./FetchButton";
import QueryBackend from "./QueryBackend";



function App() {
  const comp = new Component(QueryBackend)
  useEffect(() => {
    comp.()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <div className="buttonIn">
        <input type="text" id="enter" placeholder="Enter a topic"/>
        <ButtonLoader />
      </div>
      </header>
    </div>
  );
}

export default App;
