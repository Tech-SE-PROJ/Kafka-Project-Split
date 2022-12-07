import { render } from '@testing-library/react';
import React, {useEffect} from 'react';
import './App.css';
import Table from './Table';

const QueryBackend = async () => {
  const response = await fetch("http://127.0.0.1:3000/ksql", {mode:'cors'})
  const backendResponse = await response.json();
  console.log(backendResponse)
}

class App extends React.Component {
  // useEffect(() => {
  //   QueryBackend()
  // }, []);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="buttonIn">
            <input type="text" id="enter" placeholder="Enter a topic"/>
            <button id="query" onClick={QueryBackend}>Query</button>
          </div>
      <div>
          <Table/>
      </div>
        </header>
      </div>
    );
  }
}


// function App() {
//   useEffect(() => {
//     QueryBackend()
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="buttonIn">
//           <input type="text" id="enter" placeholder="Enter a topic"/>
//           <button id="query" onClick={QueryBackend}>Query</button>
//         </div>
//     <div>
//         <Table/>
//     </div>
//       </header>
//     </div>
//   );
// }

export default App;
