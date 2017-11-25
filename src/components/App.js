
import React, { Component } from 'react';
import Vendor from './Vendor';
import Program from './Program';

class App extends Component {
  render() {
    // eslint-disable-next-line
    let program = {
      programId: 12345,
      programName: "Big Project One",
      description: "Long description",
      startDate: "2017-09-01",
      fundingModelId: 100,
      vendorId: 6,
      serviceSubcategoryId: 5,
      programType: "Community"
    };

    return (
      <div className="container">
        <h1>CLBC MyWorkspace</h1>
        <h2>Create Draft Program</h2>
        <form>
          <Vendor />
          <Program />
        </form>
      </div>
    );
  }
}

export default App;
