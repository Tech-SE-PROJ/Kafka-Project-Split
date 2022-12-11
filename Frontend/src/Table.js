import React from 'react';
import ReactDOM from 'react-dom';


class Table extends React.Component {
    constructor(props) {
       super(props)
       debugger;
       console.log(props)
       this.state = { queryData: [props] };
         //  queryData: [ props ]
         //  { name: ,
         //    type: ,
         //    keyFormat: ,
         //    valueFormat: ,
         //    topic: ,
         //    partitions: ,
         //    replication: ,
         //    statement: ,
         //    sourceConstraints: ,
         //    }
            //  { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            //  { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            //  { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            //  { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
      //  }
    }
 
    renderTableHeader() {
       let header = Object.keys(this.state.queryData[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
       return this.state.queryData.map((k, index) => {
          const { name, type, keyFormat, valueFormat, //destructuring here
                  topic, partitions, replication, statement,
                  sourceConstraints, clusterError, clusterStatistics } = k 
          return (
            //  <tr key={id}>\
             <tr>
                <td>{name}</td>
                <td>{type}</td>
                <td>{keyFormat}</td>
                <td>{valueFormat}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
          <br/>
             <table id='students'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }
 
 ReactDOM.render(<Table />, document.getElementById('root'));
 export default Table;