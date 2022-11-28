import React, {useEffect} from 'react';
import './App.css';
// import axios from 'axios';

// //const data = {location:value}
// const options = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   }
//   //body: 
// }

function App() {
  useEffect(() => {
    fetch("<http://10.239.56.161:3000/ksql>")
    .then((response) => response.json())
    .then((response) => console.log(response))
    }
  )
  // useEffect() => { //the useEffect hook can avoid "side effects" or a snippet of code returning different values when ran again
  //   .then((response) => console.log(response))
    // const getInfo = async function(){
    //   const url = "<http://10.239.56.161:3000/ksql>"
    //   //const response = await axios.get(url)
    //   //const data = response.data;
    //   console.log(data)
//     }
//     //getInfo()
// }, []
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
