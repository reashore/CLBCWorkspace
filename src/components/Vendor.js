
import React, { Component } from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

const getVendors = () => {
    let vendors = [
        {
            vendorId: 1,
            name: "Vendor Name 1",
            ocgNumber: "1234",
            managingQsAreaId: 2,
            primaryAddress: "primary address 1"

        },
        {
            vendorId: 2,
            name: "Vendor Name 2",
            ocgNumber: "1234",
            managingQsAreaId: 2,
            primaryAddress: "primary address 2"

        },
        {
            vendorId: 3,
            name: "Vendor Name 3",
            ocgNumber: "1234",
            managingQsAreaId: 3,
            primaryAddress: "primary address 3"

        },
        {
            vendorId: 4,
            name: "Vendor Name 4",
            ocgNumber: "1234",
            managingQsAreaId: 4,
            primaryAddress: "primary address 4"

        },
    ];

    return vendors;
}

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
    }

    onChange(event) {
        console.log("onChange");
    }

    render() {
        let vendors = getVendors();
        let options = createSelectOptionsFromVendors(vendors);

        return (
            <form>
                <SelectInput name="vendorId" label="Vendor Name:" onChange={this.onChange} 
                    defaultOption="Select vendor" error="" options={options} />

                <TextInput name="ocgNumber" label="OCG Number:" placeholder="OCG Number" readOnly={true} value="" error="" />
                <TextInput name="managingQsArea" label="Managing QS Area:" placeholder="Managing QS Area" readOnly={true} value="" error="" />
                <TextInput name="primaryAddress" label="Primary Address:" placeholder="Primary Address" readOnly={true} value="" error="" />
            </form>
        );
    }
}

export default Vendor;
