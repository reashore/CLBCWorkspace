
import React, { Component } from 'react';
import CommunityData from '../data/CommunityData';
import DropDownList from '../common/DropDownList';

class Community extends Component {
  constructor(props) {
    super(props);

    this.cpdAreas = CommunityData.getCpdAreas();
  }

  createSelectOptionsFromCpdAreas(vendors) {
    return this.cpdAreas.map(cpdArea => {
      return {
        value: cpdArea.cpdAreaId,
        text: cpdArea.cpdArea
      };
    });
  }

  render() {
    const cpdAreaOptions = this.createSelectOptionsFromCpdAreas(this.cpdAreas);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Community</div>
        <div className="panel-body">
            <DropDownList id="cpdAreaId" label="CPD Area:" options={cpdAreaOptions} />
        </div>
      </div>
    );
  }
}

export default Community;
