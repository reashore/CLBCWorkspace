
import React, { Component } from 'react';
import ProgramData from '../data/ProgramData';
import DropDownList from '../common/DropDownList';
import PlaceOfService from './PlaceOfService';
import Community from './Community';

// import '@progress/kendo-theme-default/dist/all.css';
// import { kendo } from "@progress/kendo-ui";
// import { Calendar } from '@progress/kendo-dateinputs-react-wrapper';

class Program extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programId: undefined,
      programName: undefined,
      description: undefined,
      startDate: undefined,
      vendorId: undefined,
      fundingModelId: undefined,
      serviceSubcategoryId: undefined,
      programType: undefined
    };

    this.serviceSubcategories = ProgramData.getServiceSubcategories();
    this.fundingModels = ProgramData.getFundingModels();
    this.programTypes = ProgramData.getProgramTypes();

    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeFundingModel = this.onChangeFundingModel.bind(this);
    this.onChangeServiceSubcategory = this.onChangeServiceSubcategory.bind(this);
  }

  createSelectOptionsFromFundingModels(fundingModels) {
    return fundingModels.map(fundingModel => {
      return {
        value: fundingModel.fundingModelId,
        text: fundingModel.fundingModel
      };
    });
  }

  createSelectOptionsFromServiceSubcategories(serviceSubcategories) {
    return serviceSubcategories.map(serviceSubcategory => {
      return {
        value: serviceSubcategory.serviceSubcategoryId,
        text: serviceSubcategory.serviceSubcategory
      };
    });
  }

  createSelectOptionsFromProgramTypes(programTypes) {
    return programTypes.map(programType => {
      return {
        value: programType.programTypeId,
        text: programType.programType
      };
    });
  }

  onChangeStartDate(event) {
    const selectedDate = event.sender.value();
    this.setState({ startDate: selectedDate });
  }

  onChangeFundingModel(event) {
    const fundingModelId = parseInt(this._fundingModelId.value, 10);
    this.setState({ fundingModelId: fundingModelId });
  }

  onChangeServiceSubcategory(event) {
    const serviceSubcategoryId = parseInt(this._serviceSubcategoryId.value, 10);
    this.setState({ fundingModelId: serviceSubcategoryId });
  }

  onSubmit(event) {
    //const serviceSubcategoryId = parseInt(this._serviceSubcategoryId.value, 10);
    // Read form values and update state
    this.setState({ fundingModelId: 21 });
  }

  render() {
    const serviceSubcategoryOptions = this.createSelectOptionsFromServiceSubcategories(this.serviceSubcategories);
    const fundingModelOptions = this.createSelectOptionsFromFundingModels(this.fundingModels);
    const programTypeOptions = this.createSelectOptionsFromProgramTypes(this.programTypes);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Program</div>
        <div className="panel-body">
          {/* <form> */}

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="programName">Program Name:</label>
                  <input type="text" name="programName" ref="_programName" className="form-control" required placeholder="Program Name" />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea name="description" ref="_description" rows="2" className="form-control" required placeholder="Description" />
                </div>

                <div className="form-group">
                  <label htmlFor="startDate">Start Date:</label>
                  <input type="date" name="startDate" ref="_startDate" className="form-control" required placeholder="Start Date" />
                </div>
              </div>
              <div className="col-md-6">
                <DropDownList id="serviceSubcategoryId" refId={e => this._serviceSubcategoryId = e} label="Service Subcategory:"
                  onChange={this.onChangeServiceSubcategory} options={serviceSubcategoryOptions} />

                <DropDownList id="fundingModelId" refId={e => this._fundingModelId = e} label="Funding Model:"
                  onChange={this.onChangeFundingModel} options={fundingModelOptions} />
              </div>
            </div>
          </div>

          <DropDownList id="programTypeId" refId="_programTypeId" label="Program Type:"
            onChange={this.onChangeProgramType} options={programTypeOptions} />

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <Community />
              </div>
              <div className="col-md-6">
                <PlaceOfService />
              </div>
            </div>
          </div>

          <button type="Submit" submit={this.onSubmit} className="btn btn-primary">Save</button>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default Program;
