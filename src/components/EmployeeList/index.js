import React from "react";

function EmployeeList(props){
    mapEmployees = () =>  {
        let empListItems = props.currentList.map(emp => {
            return (
                <li key={emp.id}> 
                    <img alt={emp.email} src={emp.avatar}></img>
                    <h2>{emp.firstName} {emp.lastName}</h2>
                    <h4>{emp.department} | {emp.title}</h4>
                    <span>{emp.email} {emp.phone}</span>
                </li>
            );
        });
        return empListItems;
    };
    return (
        <ul>
            {this.mapEmployees()}
        </ul>
    );
}

export default EmployeeList;