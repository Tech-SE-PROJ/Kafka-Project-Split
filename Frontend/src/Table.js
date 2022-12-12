import React from 'react';

class Table extends React.Component {
   constructor(props) {
      super(props)
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
            <tr id='streamTableBodyRow' key={index}>
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
                  <td>Empty</td>}
               {!clusterStatistics ?
                  <td>{clusterStatistics}</td> :
                  <td>Empty</td>}
               {!clusterError ?
                  <td>{clusterError}</td> :
                  <td>Empty</td>}
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <br />
            <table className='streamTable' border='3'>
               <tbody className='streamBody'>
                  <tr className='streamTableHeaderRow'>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table;