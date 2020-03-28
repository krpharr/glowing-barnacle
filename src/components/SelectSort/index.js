import React from "react";

function SelectSort(props){
    function includeDepartment(){
        if(props.department === "All"){
            return <option value="department">Department</option>
        }
    }
    return (
        <div>
            <select onChange={props.handleSortChange} id="selectSort">
                {includeDepartment()}
                <option value="lastName">Last Name</option>
                <option value="title">Title</option>
            </select>
        </div>
    );
}

export default SelectSort;