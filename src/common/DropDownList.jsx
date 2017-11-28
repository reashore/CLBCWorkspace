
import React, { Component } from 'react';

// Note that the ref attribute requires that this component be statefull

class DropDownList extends Component {
  render() {
    const { id, refId, label, onChange = f => f, options } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <select name={id} ref={refId} onChange={onChange} className="form-control">
          {options.map(option => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default DropDownList;
