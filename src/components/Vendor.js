
import React, { Component } from 'react';
import getVendors from '../data/getVendors';

const createSelectOptionsFromVendors = vendors => {
    return vendors.map(vendor => {
        return {
            value: vendor.vendorId,
            text: vendor.name
        };
    });
}

class Vendor extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        // this.state = {
        //     vendors: getVendors()
        // }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const { _vendorId, _ocgNumber, _managingQsArea, _primaryAddress } = this.refs;
        let vendorId = parseInt(_vendorId.value, 10);
        let vendors = getVendors();
        let vendor = vendors.find(vendor => vendor.vendorId === vendorId);
        _ocgNumber.value = vendor.ocgNumber;
        _managingQsArea.value = vendor.managingQsArea;
        _primaryAddress.value = vendor.primaryAddress;
    }

    render() {
        let vendors = getVendors();
        let options = createSelectOptionsFromVendors(vendors);

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Vendors</div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="vendorId">Vendor Name:</label>
                            <select name="vendorId" ref="_vendorId" onChange={this.onChange} className="form-control">
                                <option value="">Select Vendor</option>
                                {options.map((option) => {
                                    return <option key={option.value} value={option.value}>{option.text}</option>;
                                })}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="ocgNumber">OCG Number:</label>
                            <input type="text" name="ocgNumber" ref="_ocgNumber" className="form-control" placeholder="OCG Number" readOnly />
                        </div>

                        <div className="form-group">
                            <label htmlFor="managingQsArea">Managing QS Area:</label>
                            <input type="text" name="managingQsArea" ref="_managingQsArea" className="form-control" placeholder="Managing Qs Area" readOnly />
                        </div>

                        <div className="form-group">
                            <label htmlFor="primaryAddress">Primary Address:</label>
                            <input type="text" name="primaryAddress" ref="_primaryAddress" className="form-control" placeholder="Primary Address" readOnly />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Vendor;
