
import React, { Component } from 'react';
import PlaceOfServiceData from '../data/PlaceOfServiceData';

class PlaceOfService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeOfServiceid: undefined
    }

    this.placeOfServices = PlaceOfServiceData.getPlaceOfServices();

    this.onChange = this.onChange.bind(this);
  }

  createSelectOptionsFromPlaceofServices(placeOfServices) {
    return placeOfServices.map(placeOfService => {
      return {
        value: placeOfService.placeOfServiceId,
        text: placeOfService.placeOfService
      };
    });
  }

  onChange(event) {
    const _placeOfServiceId = this.refs._placeOfServiceId;
    const placeOfServiceId = parseInt(_placeOfServiceId.value, 10);
    this.setState({ placeOfServiceId: placeOfServiceId })
  }

  render() {
    const placeOfServiceOptions = this.createSelectOptionsFromPlaceofServices(this.placeOfServices);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Place of Service</div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="placeOfServiceId">Place of Service:</label>
              <select name="placeOfServiceId" ref="_placeOfServiceId" onChange={this.onChange} className="form-control">
                <option value="">Select Place of Service</option>
                {placeOfServiceOptions.map((option) => {
                  return <option key={option.value} value={option.value}>{option.text}</option>;
                })}
              </select>
            </div>

            <button type="Submit" className="btn btn-primary">Create Place of Service</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PlaceOfService;
