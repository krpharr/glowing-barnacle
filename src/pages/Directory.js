import React from "react";
import data from "../data/data";

console.log(data);

class Directory extends React.Component {
    state = {
        employees: data
    };

    componentDidMount() {
        
    }

    mapEmployees = () =>  {
        let empTable = this.state.employees.map(emp => {
            return (
                <div>
                    <img alt={emp.email} src={emp.avatar}></img>
                    <h2>{emp.firstName} {emp.lastName}</h2>
                    <h4>{emp.department} | {emp.title}</h4>
                    <span>{emp.email} {emp.phone}</span>
                </div>
            );
        });
        return empTable;
    };
    

    render(){
        return (
            <div>
                <h1>Directory</h1>
                {this.mapEmployees()}
            </div>
        );
    }
}

export default Directory;
