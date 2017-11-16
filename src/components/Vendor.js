
import React, { Component } from 'react';
//import SelectInput from '../common/SelectInput';
//import TextInput from '../common/TextInput';

const getVendors = () =>
    [
        {
            vendorId: 1,
            name: "Vendor Name 1",
            ocgNumber: "1",
            managingQsArea: "Managing Qs Area 1",
            primaryAddress: "Primary Address 1"

        },
        {
            vendorId: 2,
            name: "Vendor Name 2",
            ocgNumber: "2",
            managingQsArea: "Managing Qs Area 2",
            primaryAddress: "Primary Address 2"

        },
        {
            vendorId: 3,
            name: "Vendor Name 3",
            ocgNumber: "3",
            managingQsArea: "Managing Qs Area 3",
            primaryAddress: "Primary Address 3"

        },
        {
            vendorId: 4,
            name: "Vendor Name 4",
            ocgNumber: "4",
            managingQsArea: "Managing Qs Area 4",
            primaryAddress: "Primary Address 4"

        },
    ];

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
            <form>
                {/* <SelectInput name="vendorId" label="Vendor Name:"
                    ref="_vendorId" onChange={this.onChange} defaultOption="Select Vendor" error="" options={options} /> */}

                <div className="form-group">
                    <label htmlFor="vendorId">Vendor Name</label>
                    <select name="vendorId" ref="_vendorId" onChange={this.onChange} className="form-control">
                        <option value="">Select Vendor</option>
                        {options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })}
                    </select>
                </div>

                {/* <TextInput name="ocgNumber" label="OCG Number:" placeholder="OCG Number" readOnly={true} value="" error="" />
                <TextInput name="managingQsArea" label="Managing QS Area:" placeholder="Managing QS Area" readOnly={true} value="" error="" />
                <TextInput name="primaryAddress" label="Primary Address:" placeholder="Primary Address" readOnly={true} value="" error="" /> */}

                <div className="form-group">
                    <label htmlFor="ocgNumber">OCG Number:</label>
                    <input type="text" name="ocgNumber" ref="_ocgNumber" className="form-control" placeholder="OCG Number" readOnly />
                </div>

                <div className="form-group">
                    <label htmlFor="managingQsArea">Managing Qs Area:</label>
                    <input type="text" name="managingQsArea" ref="_managingQsArea" className="form-control" placeholder="Managing Qs Area" readOnly />
                </div>

                <div className="form-group">
                    <label htmlFor="primaryAddress">Primary Address:</label>
                    <input type="text" name="primaryAddress" ref="_primaryAddress" className="form-control" placeholder="Primary Address" readOnly />
                </div>
            </form>
        );
    }
}

export default Vendor;
