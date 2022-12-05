import React, { Component, useEffect } from "react";



export default class ButtonLoader extends Component {
  state = {
    loading: false
  };

   
   QueryBackend = async () => {
    const response = await fetch("http://127.0.0.1:3000/ksql", {mode:'cors'})
    const backendResponse = await response.json();
    console.log(backendResponse)
  }

    
  
  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  };

  render() {
    const { loading } = this.state;
    
    return (
      <div style={{ marginTop: "60px" }}>
        <button className="button" onClick={this.QueryBackend} disabled={loading} id='query'>
            
          {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>Loading Data from Server</span>}
          {!loading && <span>Fetch Data from Server</span>}
        </button>
      </div>
    );
  }
}