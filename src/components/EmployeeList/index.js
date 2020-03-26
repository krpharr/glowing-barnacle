import React from "react";
import "./style.css";
import Card from "../Card";

function EmployeeList(props){
    const mapEmployees = () =>  {
        let empListItems = props.currentList.map(emp => {
            return (
                // <li key={emp.id}> 
                //     <img alt={emp.email} src={emp.avatar}></img>
                //     <h2>{emp.firstName} {emp.lastName}</h2>
                //     <h4>{emp.department} | {emp.title}</h4>
                //     <span>{emp.email} {emp.phone}</span>
                // </li>
                <li key={emp.id}>
                    <Card {...emp}/>
                </li>
            );
        });
        return empListItems;
    };

    return (
        <ul className="employee-list">
            {mapEmployees()}
        </ul>
    );
}

export default EmployeeList;