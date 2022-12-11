import React from 'react';
import ReactDOM from 'react-dom/client';


class Table extends React.Component {
    constructor(props) {
       super(props)
       console.log(props)
       this.state = { queryData: [props] };
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
             <tr key={index}>
                <td>{name}</td>
                <td>{type}</td>
                <td>{keyFormat}</td>
                <td>{valueFormat}</td>
                <td>{topic}</td>
                <td>{partitions}</td>
                <td>{replication}</td>
                <td>{statement}</td>
                {!sourceConstraints ? 
                <td>{sourceConstraints}</td> :
                "Empty"}
                {!clusterStatistics ? 
                  <td>{clusterStatistics}</td> :
                  "Empty" }
                {!clusterError ? 
                  <td>{clusterError}</td> :
                  "Empty"}
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
 const root = ReactDOM.createRoot(
   document.getElementById('root')
 ); //NOTE: Removed React.StrictMode below 
 root.render(
   <Table />
 );
//  ReactDOM.render(<Table />, document.getElementById('root'));
 export default Table;