import React from "react";
import SelectDepartment from "../components/SelectDepartment";
import SelectSort from "../components/SelectSort";
import EmployeeList from "../components/EmployeeList";
import data from "../data/data";

class Directory extends React.Component {
    state = {
        employees: data,
        departments: [],
        department: "All",
        sort: "lastName",
        currentList: []
    };

    componentDidMount() {
        const departments = [...new Set(data.map(emp => emp.department))];
        departments.unshift("All");
        let currentList = this.sort(data, "lastName");
        this.setState({departments: departments, currentList: currentList});    
    }

    sort = (data, column) => {
        let sorted = data.slice();
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
        empByDept = this.sort(empByDept, this.state.sort);
        this.setState({department: event.target.value, currentList: empByDept});
    };

    handleSortChange = event => {
        console.log("handleSortChange: ", event.target.value);
        let sorted = this.sort(this.state.currentList, event.target.value);
        console.log(sorted);
        this.setState({sort: event.target.value, currentList: sorted});
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
                <h2>Sort</h2>
                <SelectSort handleSortChange={this.handleSortChange} />
                <EmployeeList currentList={this.state.currentList} />
            </div>
        );
    }
}

export default Directory;
