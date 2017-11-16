
import React, { Component } from 'react';
import SelectInput from '../common/SelectInput'

class Vendor extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log("onChange");
    }

    createSelectOptionsFromVendorArray(vendors) {
        return vendors.map(vendor =>{
            return {
                value: vendor.vendorId,
                text: vendor.name
            }
        })
    }

    render() {
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
                vendorId: 1,
                name: "Vendor Name 1",
                ocgNumber: "1234",
                managingQsAreaId: 2,
                primaryAddress: "primary address 3"

            },
            {
                vendorId: 1,
                name: "Vendor Name 1",
                ocgNumber: "1234",
                managingQsAreaId: 2,
                primaryAddress: "primary address 4"

            },
        ];

        let options = this.createSelectOptionsFromVendorArray(vendors);

      return (
        <form>
            <SelectInput name="vendorId" label="Vendor Name:" 
                onChange={this.onChange} defaultOption="Select vendor" 
                value="1" error={false} options={options} />
            


        </form>
      );
    }
  }
  
  export default Vendor;
  