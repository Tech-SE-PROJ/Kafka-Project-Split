import React, {useEffect} from 'react';
import {useState} from 'react';
import './App.css';
import Table from './Table';

const QueryBackend = async (input: string) => {
  const response = await fetch(`http://127.0.0.1:3000/ksql?table=${input}`, 
  { mode:'cors'
  })
  const backendResponse = await response.json();
  console.log(backendResponse)
}

function App() {
  const[searchText, setSearchText] = useState("")
  useEffect(() => {
    QueryBackend(searchText)
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <div className="buttonIn">
            <input type="text" id="enter" placeholder="Enter a topic" value={searchText} onChange={(e) =>
              {setSearchText(e.target.value)}}/>
            <button id="query" onClick={(e) => QueryBackend(searchText)}>Query</button>
          </div>
      <div>
          <Table/>
      </div>
        </header>
      </div>
    );
}

export default App;
