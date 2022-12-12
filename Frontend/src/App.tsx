import React, {useEffect} from 'react';
import {useState} from 'react';
import './App.css';
import Table from './Table';

const convertObject = (queryData: any) => { //any is required, typescript won't compile without
  var clusterStats: any = {} //same here
  var clusterError: any = {}

  if (queryData.sourceDescription.clusterStatistics.type !== undefined) 
  {
    for (var key in queryData.sourceDescription.clusterStatistics) 
    {
      if (queryData.hasOwnProperty(key)) 
        clusterStats = queryData[key];
    }
  } //removed else here, unnecessary for this

  if (queryData.sourceDescription.clusterErrorStats.type !== undefined) 
  {
    for (var key2 in queryData.sourceDescription.clusterErrorStats)
    {
      if (queryData.hasOwnProperty(key2)) 
        clusterError = queryData[key2];
    }
  } //removed else here, unnecessary for this

  const clusterStatsDate = new Date() /* converting unix timestamp to an appropriate date */
  const clusterErrorDate = new Date()
  clusterStatsDate.toLocaleTimeString("en-US")
  clusterErrorDate.toLocaleTimeString("en-US")
  if(!clusterStats)
    clusterStats.timestamp = clusterStatsDate
  if(!clusterError)
    clusterError.timestamp = clusterErrorDate

  const convertedData = {
    name: queryData.sourceDescription.name,
    type: queryData.sourceDescription.type,
    keyFormat: queryData.sourceDescription.keyFormat,
    valueFormat: queryData.sourceDescription.valueFormat,
    topic: queryData.sourceDescription.topic,
    partitions: queryData.sourceDescription.partitions,
    replication: queryData.sourceDescription.replication,
    statement: queryData.sourceDescription.statement,
    sourceConstraints: queryData.sourceDescription.sourceConstraints,
    clusterStatistics: clusterStats,
    clusterError: clusterError
  }
  return convertedData;
}

function App() {
  const[searchText, setSearchText] = useState("") //using state here
  const[renderHeader, setHeader] = useState("")
  const[renderTable, setTable] = useState(false)
  const[tableData, sendTable] = useState({})

  useEffect(() => { //runs only once to prevent infinite loop!!
    setHeader("Input a new topic or stream.")
  }, [])

  const ClearField = () => {
    setSearchText('')
  }

  const QueryBackend = async (input: string) => {
    const button = document.getElementById('query');
    button?.addEventListener('click', function handleClick() {
      if(renderTable)
        setTable(false)
    });
    const response = await fetch(
      `http://127.0.0.1:3000/ksql?table=${input}`, { mode:'cors' })
    const backendResponse = await response.json();
    if(Object.entries(backendResponse).length === 0)
    {
      setHeader("Invalid stream name.")
    }
    else
    {
      setHeader("Stream found!")
      sendTable(convertObject(backendResponse))
      setTable(true)
    }
  }

  return ( 
      <div className="App">
        <header className="App-header">
          <div>
            <h1> {renderHeader} </h1>
          </div>
          <div className="buttonIn">
            <input type="text" id="enter" onClick={ClearField} placeholder="Enter a topic/stream" 
            value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
            <button id="query" onClick={() => QueryBackend(searchText)}>Query</button>
          </div>
      <div>
        {renderTable === true && <Table {... tableData} />}
      </div>
        </header>
      </div> 
    );
}
export default App;
