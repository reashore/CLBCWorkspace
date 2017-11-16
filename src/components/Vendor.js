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

    render() {
        let options = [
            {
                value: 1,
                text: "Vendor Name 1"
            },
            {
                value: 2,
                text: "Vendor Name 2"
            },
            {
                value: 3,
                text: "Vendor Name 3"
            },
            {
                value: 4,
                text: "Vendor Name 4"
            }
        ];


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
  