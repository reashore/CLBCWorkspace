
import React, { Component } from 'react';
import Vendor from './Vendor';
import Program from './Program';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const program = this.getProgramValues();
    const message = this.formatProgramValues(program);

    alert(message);
  }

  getProgramValues() {
    const createProgramForm = document.forms.createProgramForm;

    const program = {
      programId: 12345,
      programName: createProgramForm.programName.value,
      description: createProgramForm.description.value,
      startDate: createProgramForm.startDate.value,
      fundingModelId: createProgramForm.fundingModelId.value,
      vendorId: createProgramForm.vendorId.value,
      serviceSubcategoryId: createProgramForm.serviceSubcategoryId.value,
      programTypeId: createProgramForm.programTypeId.value,
      cpdAreaId: createProgramForm.cpdAreaId.value,
      placeOfServiceId: createProgramForm.placeOfServiceId.value
    };

    return program;
  }

  formatProgramValues(program) {
    const eol = `
    `;
    let message = `Form values:${eol}`;

    message += `Program Id = ${program.programId},${eol}`;
    message += `Program Name = ${program.programName},${eol}`;
    message += `Description = ${program.description},${eol}`;
    message += `Start Date = ${program.startDate},${eol}`;
    message += `Vendor Id = ${program.vendorId},${eol}`;
    message += `Service Subcategory Id = ${program.serviceSubcategoryId},${eol}`;
    message += `Funding Model Id = ${program.fundingModelId},${eol}`;
    message += `Program Type Id = ${program.programTypeId},${eol}`;
    message += `CPD Area Id = ${program.cpdAreaId},${eol}`;
    message += `Place Of Service Id = ${program.placeOfServiceId},${eol}`;

    return message;
  }

  render() {
    return (
      <div className="container">
        <h1>CLBC MyWorkspace</h1>
        <h2>Create Draft Program</h2>
        <form id="createProgramForm" onSubmit={this.onSubmit}>
          <Vendor />
          <Program />
        </form>
      </div>
    );
  }
}

export default App;
