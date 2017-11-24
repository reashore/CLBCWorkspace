
import React, {Component} from 'react';

// Note that the "ref" requires that this component be statefull

class DropDownList extends Component {
  render() {
    const {id, ref, label, onChange = f => f, defaultOption = "Select option", options} = this.props;

    return (
      <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select name={id} ref={ref} onChange={onChange} className="form-control">
        {defaultOption ? <option value="">{defaultOption}</option> : ""}
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.text}</option>;
        })}
      </select>
    </div>
    );
  }
}

export default DropDownList;
