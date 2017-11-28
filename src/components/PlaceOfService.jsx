
import React, { Component } from 'react';
import PlaceOfServiceData from '../data/PlaceOfServiceData';
import DropDownList from '../common/DropDownList';

class PlaceOfService extends Component {
  constructor(props) {
    super(props);

    this.placeOfServices = PlaceOfServiceData.getPlaceOfServices();
  }

  createSelectOptionsFromPlaceofServices(placeOfServices) {
    return placeOfServices.map(placeOfService => {
      return {
        value: placeOfService.placeOfServiceId,
        text: placeOfService.placeOfService
      };
    });
  }

  render() {
    const placeOfServiceOptions = this.createSelectOptionsFromPlaceofServices(this.placeOfServices);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Place of Service</div>
        <div className="panel-body">
          <DropDownList id="placeOfServiceId" label="Place of Service:" options={placeOfServiceOptions} />

          <button className="btn btn-primary">Create Place of Service</button>
        </div>
      </div>
    );
  }
}

export default PlaceOfService;
