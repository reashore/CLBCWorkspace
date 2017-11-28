
import React, { Component } from 'react';
import ProgramData from '../data/ProgramData';
import DropDownList from '../common/DropDownList';
import ProgramType from './ProgramType';

// import '@progress/kendo-theme-default/dist/all.css';
// import { kendo } from "@progress/kendo-ui";
// import { Calendar } from '@progress/kendo-dateinputs-react-wrapper';

class Program extends Component {
  constructor(props) {
    super(props);

    this.serviceSubcategories = ProgramData.getServiceSubcategories();
    this.fundingModels = ProgramData.getFundingModels(1);

    this.onChange =this.onChange.bind(this);
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

  onChange(event) {
    const temp = this._serviceSubcategoryId;
    const serviceSubcategoryId = parseInt(this._serviceSubcategoryId.value, 10);
    this.fundingModels = ProgramData.getFundingModels(serviceSubcategoryId);
    this.forceUpdate();
  }

  render() {
    const serviceSubcategoryOptions = this.createSelectOptionsFromServiceSubcategories(this.serviceSubcategories);
    const fundingModelOptions = this.createSelectOptionsFromFundingModels(this.fundingModels);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Program</div>
        <div className="panel-body">
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
                {/* <DropDownList id="serviceSubcategoryId" label="Service Subcategory:" options={serviceSubcategoryOptions} /> */}
                <DropDownList id="serviceSubcategoryId" refId={e => this._serviceSubcategoryId = e} label="Service Subcategory:"
                    onChange={this.onChange} options={serviceSubcategoryOptions} />

                {/* <DropDownList id="vendorId" refId={e => this._vendorId = e} label="Vendor Name:" onChange={this.onChange} options={vendorOptions} /> */}


                <DropDownList id="fundingModelId" label="Funding Model:" options={fundingModelOptions} />
              </div>
            </div>
          </div>

          <ProgramType />

          <button type="Submit" className="btn btn-primary">Save Program</button>
        </div>
      </div>
    );
  }
}

export default Program;
