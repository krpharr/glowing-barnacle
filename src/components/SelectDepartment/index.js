import React from "react";

function SelectDirectory(props){
  return (
    <div>
      <select 
        onChange={props.handleDepartmentChange}
        name="department" 
        id="department" 
      >
        {props.departments.map(dept => (
          <option value={dept} key={dept}>{dept}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectDirectory;

