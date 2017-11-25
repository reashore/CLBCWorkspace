
import React, { Component } from 'react';
import VendorData from '../data/VendorData';
import DropDownList from '../common/DropDownList';

class Vendor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vendorId: undefined
    }

    this.vendors = VendorData.getVendors();
    this.onChange = this.onChange.bind(this);
  }

  createSelectOptionsFromVendors(vendors) {
    return this.vendors.map(vendor => {
      return {
        value: vendor.vendorId,
        text: vendor.name
      };
    });
  }

  onChange(event) {
    const vendorId = parseInt(this._vendorId.value, 10);
    const vendor = this.vendors.find(vendor => vendor.vendorId === vendorId);

    this.setState({ vendorId: vendorId });

    const { _ocgNumber, _managingQsArea, _primaryAddress } = this.refs;
    _ocgNumber.value = vendor.ocgNumber;
    _managingQsArea.value = vendor.managingQsArea;
    _primaryAddress.value = vendor.primaryAddress;
  }

  render() {
    const vendorOptions = this.createSelectOptionsFromVendors(this.vendors);

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Vendors</div>
        <div className="panel-body">
          {/* <form> */}
          <DropDownList id="vendorId" refId={e => this._vendorId = e} label="Vendor Name:" onChange={this.onChange} options={vendorOptions} />

          <div className="container-fluid">
            <div className="row">

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="ocgNumber">OCG Number:</label>
                  <input type="text" name="ocgNumber" ref="_ocgNumber" className="form-control" placeholder="OCG Number" readOnly />
                </div>

                <div className="form-group">
                  <label htmlFor="managingQsArea">Managing QS Area:</label>
                  <input type="text" name="managingQsArea" ref="_managingQsArea" className="form-control" placeholder="Managing Qs Area" readOnly />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="primaryAddress">Primary Address:</label>
                  <input type="text" name="primaryAddress" ref="_primaryAddress" className="form-control" placeholder="Primary Address" readOnly />
                </div>
              </div>

            </div>
          </div>

          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default Vendor;
