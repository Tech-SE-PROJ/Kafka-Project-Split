import React, {Component} from 'react';


// export default class QueryBackend extends Component {
    const QueryBackend = async() => {
            const response = await fetch("http://127.0.0.1:3000/ksql", {mode:'cors'})
            const backendResponse = await response.json();
            console.log(backendResponse)
          }
export default QueryBackend;
//}