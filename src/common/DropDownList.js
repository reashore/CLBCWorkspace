import React from 'react';

const DropDownList = (ddlId, ddlRef, onChange = f => f, defaultOption = "Select option", ddlOptions) => {
  //let options = ddlOptions;

  return (
    <div className="form-group">
    <label htmlFor={ddlId}>Service Subcategory:</label>
    <select name={ddlId} ref={ddlRef} onChange={onChange} className="form-control">
      <option value="">{defaultOption}</option>
      {ddlOptions.map(option => {
        return <option key={option.value} value={option.value}>{option.text}</option>;
      })}
    </select>
  </div>
  );
}

export default DropDownList;
