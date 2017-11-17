
import React, { Component } from 'react';
// import '@progress/kendo-theme-default/dist/all.css';
// import { Calendar } from '@progress/kendo-dateinputs-react-wrapper';
// import { kendo } from "@progress/kendo-ui";

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.state({ dateTime: event.sender.value() });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Program</div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="programName">Program Name:</label>
              <input type="text" name="programName" ref="_programName" className="form-control" placeholder="Program Name" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input type="text" name="description" ref="_description" className="form-control" placeholder="Description" />
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input type="text" name="startDate" ref="_startDate" className="form-control" placeholder="Start Date" />
            </div>

            {/* <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <Calendar value={this.state.dateTime} change={this.onChange} className="form-control" />
            </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Program;
