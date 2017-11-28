
import React, { Component } from 'react';
import ProgramData from '../data/ProgramData';
import DropDownList from '../common/DropDownList';
import PlaceOfService from './PlaceOfService';
import Community from './Community';

class ProgramType extends Component {
  constructor(props) {
    super(props);

    this.programTypes = ProgramData.getProgramTypes();
  }

  createSelectOptionsFromProgramTypes(programTypes) {
    return programTypes.map(programType => {
      return {
        value: programType.programTypeId,
        text: programType.programType
      };
    });
  }

  render() {
    const programTypeOptions = this.createSelectOptionsFromProgramTypes(this.programTypes);

    return (
      <div>
        <DropDownList id="programTypeId" label="Program Type:" options={programTypeOptions} />

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
      </div>
    );
  }
}

export default ProgramType;
