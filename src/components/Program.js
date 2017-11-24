
import React, { Component } from 'react';
import ProgramData from '../data/ProgramData';
import PlaceOfService from './PlaceOfService';
import Community from './Community';
import DropDownList from '../common/DropDownList';

// import '@progress/kendo-theme-default/dist/all.css';
// import { Calendar } from '@progress/kendo-dateinputs-react-wrapper';
// import { kendo } from "@progress/kendo-ui";

// todo: Need higher-level component to implement DDLs
class Program extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // todo: make start date undefined?
      startDate: new Date(),
      fundingModelId: undefined,
      serviceSubcategoryId: undefined
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
    let selectedDate = event.sender.value();
    this.setState({ startDate: selectedDate });
  }

  onChangeFundingModel(event) {
    let _fundingModelId = this.refs._fundingModelId;
    let fundingModelId = parseInt(_fundingModelId.value, 10);
    this.setState({ fundingModelId: fundingModelId });
  }

  onChangeServiceSubcategory(event) {
    let _serviceSubcategoryId = this.refs._serviceSubcategoryId;
    let serviceSubcategoryId = parseInt(_serviceSubcategoryId.value, 10);
    this.setState({ fundingModelId: serviceSubcategoryId });
  }

  render() {
    const serviceSubcategoryOptions = this.createSelectOptionsFromServiceSubcategories(this.serviceSubcategories);
    const fundingModelOptions = this.createSelectOptionsFromFundingModels(this.fundingModels);
    const programTypeOptions = this.createSelectOptionsFromProgramTypes(this.programTypes);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Program</div>
        <div className="panel-body">
          <form>

            <div className="form-group">
              <label htmlFor="programName">Program Name:</label>
              <input type="text" name="programName" ref="_programName" className="form-control" required placeholder="Program Name" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea name="description" ref="_description" rows="2" className="form-control" required placeholder="Description" />
              {/* <input type="text" name="description" ref="_description" className="form-control" placeholder="Description" /> */}
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input type="text" name="startDate" ref="_startDate" className="form-control" required placeholder="Start Date" />
            </div>

            <DropDownList id="serviceSubcategoryId"
              ref="_serviceSubcategoryId"
              label="Service Subcategory:"
              onChange={this.onChangeServiceSubcategory}
              defaultOption="Select Service Subcategory"
              options={serviceSubcategoryOptions} />

            {/* <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <Calendar value={this.state.dateTime} change={this.onChangeStartDate} className="form-control" />
            </div> */}

            <DropDownList id="fundingModelId"
              ref="_fundingModelId"
              label="Funding Model:"
              onChange={this.onChangeFundingModel}
              defaultOption="Select Funding Model"
              options={fundingModelOptions} />


            {/* <div className="form-group">
              <label htmlFor="fundingModelId">Funding Model:</label>
              <select name="fundingModelId" ref="_fundingModelId" onChange={this.onChangeFundingModel} className="form-control">
                <option value="">Select Funding Model</option>
                {fundingModelOptions.map((option) => {
                  return <option key={option.value} value={option.value}>{option.text}</option>;
                })}
              </select>
            </div> */}

            <DropDownList id="programTypeId"
              ref="_programTypeId"
              label="Program Type:"
              onChange={this.onChangeProgramType}
              defaultOption=""
              options={programTypeOptions} />


            {/* <div className="form-group">
              <label htmlFor="programTypeId">Program Type:</label>
              <select name="programTypeId" ref="_programTypeId" onChange={this.onChangeProgramType} className="form-control">
                {programTypeOptions.map((option) => {
                  return <option key={option.value} value={option.value}>{option.text}</option>;
                })}
              </select>
            </div> */}

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

            <button type="Submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Program;
