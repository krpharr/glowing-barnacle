import React from "react";
import SelectDepartment from "../components/SelectDepartment";
import data from "../data/data";

class Directory extends React.Component {
    state = {
        employees: data,
        departments: [],
        department: "All",
        currentList: data
    };

    componentDidMount() {
        const departments = [...new Set(data.map(emp => emp.department))];
        departments.unshift("All");
        this.setState({departments: departments});    
    }

    sort = (column) => {
        let sorted = this.state.currentList.slice();
        sorted.sort((a,b)=>{
            if(a[column] > b[column])return 1;
            if(a[column] < b[column])return -1;
            return 0;
        });
        return sorted;
    };

    filter = (department) => {
        let filtered = data.filter(emp => {
            return emp.department === department;
        });
        return filtered;
    };

    handleDepartmentChange = event => {
        console.log("handleDepartmentChange: ", event.target.value);

        let empByDept = (event.target.value === "All" ? data : this.filter(event.target.value));
        console.log(empByDept);
        this.setState({currentList: empByDept});
    };

    mapEmployees = () =>  {
        console.log(this.state.departments);
        let empListItems = this.sort("lastName").map(emp => {
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
                <h1>Department</h1>
                <SelectDepartment 
                    departments={this.state.departments} 
                    handleDepartmentChange={this.handleDepartmentChange} 
                    department={this.state.department}
                />
                <ul>
                    {this.mapEmployees()}
                </ul>
            </div>
        );
    }
}

export default Directory;
