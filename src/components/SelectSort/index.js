import React from "react";

function SelectSort(props){
    return (
        <div>
            <select onChange={props.handleSortChange} id="selectSort">
                <option value="lastName">Last Name</option>
                <option value="department">Department</option>
                <option value="title">Title</option>
            </select>
        </div>
    );
}

export default SelectSort;