
import React, { Component } from 'react';
import Vendor from './Vendor';
import Program from './Program';

class App extends Component {
  render() {
    return (
      <div>
        <h1>CLBC Workspace</h1>
        <h2>Create Draft Program</h2>
        <Vendor />
        <Program />
      </div>
    );
  }
}

export default App;
