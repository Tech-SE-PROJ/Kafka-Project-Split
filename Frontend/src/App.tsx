import React, {useEffect} from 'react';
import {useState} from 'react';
import './App.css';
import Table from './Table';
// const QueryBackend = async (input: string) => {
//   const response = await fetch(
//     `http://127.0.0.1:3000/ksql?table=${input}`, { mode:'cors' })
//   const backendResponse = await response.json();
//   return backendResponse
//   // if(!backendResponse)
//   // {
//   //   Checker(backendResponse, )
//   // }
//   // else 
//   //   console.log(backendResponse)
//   //console.log(backendResponse)
// }

function App() {
  const[searchText, setSearchText] = useState("")
  const[renderHeader, setHeader] = useState("")
  useEffect(() => { //runs only once to prevent infinite loop!!
    setHeader("Input is empty, input a topic or stream.")
  }, [])
  // useEffect(() => {
  //   QueryBackend(searchText)
  // }, []);
  const QueryBackend = async (input: string) => {
    const response = await fetch(
      `http://127.0.0.1:3000/ksql?table=${input}`, { mode:'cors' })
    const backendResponse = await response.json();
    if(Object.entries(backendResponse).length === 0)
    {
      setHeader("Invalid stream name.")
    }
    else
      setHeader("Stream found!")
  }

  return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1> {renderHeader} </h1>
          </div>
          <div className="buttonIn">
            <input type="text" id="enter" placeholder="Enter a topic/stream" value={searchText} 
            onChange={(e) => {setSearchText(e.target.value)}}/>
            <button id="query" onClick={() => QueryBackend(searchText)}>Query</button>
          </div>
      <div>
          <Table />
      </div>
        </header>
      </div>
    );
}

export default App;
