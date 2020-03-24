import React from "react";
import data from "../data/data";

class Directory extends React.Component {
    state = {
        employees: data,
        departments: []
    };

    componentDidMount() {
        const departments = [...new Set(this.state.employees.map(emp => emp.department))];
        this.setState({departments: departments});
        
    }

    sort = (column) => {
        let sorted = this.state.employees.slice();
        sorted.sort((a,b)=>{
            if(a[column] > b[column])return 1;
            if(a[column] < b[column])return -1;
            return 0;
        });
        return sorted;
    };

    filter = (department) => {
        let filtered = this.state.employees.map(emp => {
            return emp.department === department;
        });
        return filtered;
    };

    mapEmployees = () =>  {
        console.log(this.state.departments);
        let empListItems = this.sort("department").map(emp => {
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
    
    render(){
        return (
            <div>
                <h1>Directory</h1>
                <ul>
                    {this.mapEmployees()}
                </ul>
            </div>
        );
    }
}

export default Directory;
