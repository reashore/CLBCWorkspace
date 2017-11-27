
import React, { Component } from 'react';
import PlaceOfServiceData from '../data/PlaceOfServiceData';
import DropDownList from '../common/DropDownList';

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
    const placeOfServiceId = parseInt(this._placeOfServiceId.value, 10);
    this.setState({ placeOfServiceId: placeOfServiceId })
  }

  render() {
    const placeOfServiceOptions = this.createSelectOptionsFromPlaceofServices(this.placeOfServices);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Place of Service</div>
        <div className="panel-body">
          <DropDownList id="placeOfServiceId" refId={e => this._placeOfServiceId = e} label="Place of Service:" onChange={this.onChange} options={placeOfServiceOptions} />

          <button type="Submit" className="btn btn-primary">Create Place of Service</button>
        </div>
      </div>
    );
  }
}

export default PlaceOfService;
