
import React, { Component } from 'react';
import Vendor from './Vendor';
import Program from './Program';

class App extends Component {

  render() {
    const divStyle = {
      margin: 20
    };
      
    return (
      <div style={divStyle} className="container">
        <h1>CLBC MyWorkspace</h1>
        <h2>Create Draft Program</h2>
        <Vendor />
        <Program />
      </div>
    );
  }
}

export default App;
