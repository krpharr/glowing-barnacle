import React from "react";
import "./style.css";
import Card from "../Card";

function EmployeeList(props){
    const mapEmployees = () =>  {
        let empListItems = props.currentList.map(emp => {
            return (
                <li key={emp.id} onClick={props.handleClickCard.bind(emp.id)}>
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