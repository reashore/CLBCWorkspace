
import React, { Component } from 'react';
import CommunityData from '../data/CommunityData';
import DropDownList from '../common/DropDownList';

class Community extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cpdAreaId: undefined,
      cpdSubareaId: undefined,
      communityid: undefined
    }

    this.cpdAreas = CommunityData.getCpdAreas();

    this.onChange = this.onChange.bind(this);
  }

  createSelectOptionsFromCpdAreas(vendors) {
    return this.cpdAreas.map(cpdArea => {
      return {
        value: cpdArea.cpdAreaId,
        text: cpdArea.cpdArea
      };
    });
  }

  onChange(event) {
    const cpdAreaId = parseInt(this._cpdAreaId.value, 10);
    this.setState({ cpdAreaId: cpdAreaId })
  }

  render() {
    const cpdAreaOptions = this.createSelectOptionsFromCpdAreas(this.cpdAreas);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Community</div>
        <div className="panel-body">
            <DropDownList id="cpdAreaId" refId={e => this._cpdAreaId = e} label="CPD Area:" onChange={this.onChange} options={cpdAreaOptions} />
        </div>
      </div>
    );
  }
}

export default Community;
