
import React, { Component } from 'react';
import ProgramData from '../data/ProgramData';
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

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Program</div>
        <div className="panel-body">
          <form>

            <div className="form-group">
              <label htmlFor="programName">Program Name:</label>
              <input type="text" name="programName" ref="_programName" className="form-control" placeholder="Program Name" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea name="description" ref="_description" rows="2" className="form-control" placeholder="Description" />
              {/* <input type="text" name="description" ref="_description" className="form-control" placeholder="Description" /> */}
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input type="text" name="startDate" ref="_startDate" className="form-control" placeholder="Start Date" />
            </div>

            {/* <DropDownList ddlId="serviceSubcategoryId"
              ddlRef="_serviceSubcategoryId"
              onChange={this.onChangeServiceSubcategory}
              defaultOption="Select Service Subcategory"
              ddlOptions={serviceSubcategoryOptions} /> */}

            <div className="form-group">
              <label htmlFor="serviceSubcategoryId">Service Subcategory:</label>
              <select name="serviceSubcategoryId" ref="_serviceSubcategoryId" onChange={this.onChangeServiceSubcategory} className="form-control">
                <option value="">Select Service Subcategory</option>
                {serviceSubcategoryOptions.map((option) => {
                  return <option key={option.value} value={option.value}>{option.text}</option>;
                })}
              </select>
            </div>

            {/* <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <Calendar value={this.state.dateTime} change={this.onChangeStartDate} className="form-control" />
            </div> */}

            <div className="form-group">
              <label htmlFor="fundingModelId">Funding Model:</label>
              <select name="fundingModelId" ref="_fundingModelId" onChange={this.onChangeFundingModel} className="form-control">
                <option value="">Select Funding Model</option>
                {fundingModelOptions.map((option) => {
                  return <option key={option.value} value={option.value}>{option.text}</option>;
                })}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fundingModelId">Funding Model:</label>
              <select name="fundingModelId" ref="_fundingModelId" onChange={this.onChangeFundingModel} className="form-control">
                <option value="">Select Funding Model</option>
                {fundingModelOptions.map((option) => {
                  return <option key={option.value} value={option.value}>{option.text}</option>;
                })}
              </select>
            </div>

            <button type="Submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Program;
