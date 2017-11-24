
import React, { Component } from 'react';
import CommunityData from '../data/CommunityData';

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
   const _cpdAreaId = this.refs._cpdAreaId;
    const cpdAreaId = parseInt(_cpdAreaId.value, 10);
    this.setState({cpdAreaId: cpdAreaId})
    // todo: Load dependent drop downs
  }

  render() {
    const cpdAreaOptions = this.createSelectOptionsFromCpdAreas(this.cpdAreas);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Community</div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="cpdAreaId">CPD Area:</label>
              <select name="cpdAreaId" ref="_cpdAreaId" onChange={this.onChange} className="form-control">
                <option value="">Select CPD Area</option>
                {cpdAreaOptions.map((option) => {
                  return <option key={option.value} value={option.value}>{option.text}</option>;
                })}
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Community;
