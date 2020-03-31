import React from "react";
import SelectDepartment from "../../components/SelectDepartment";
import SelectSort from "../../components/SelectSort";
import EmployeeList from "../../components/EmployeeList";
import data from "../../data/data";
import "./style.css";

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

  handleClickCard = id => {
    console.log("handleClickCard: ", id);
    window.location = `/employee/${id}`;
  };
  
  render(){
    return (
      <div className="container">
        <h1 className="text-center">Sort Schmort, Inc.</h1>
        <div className="row mt-2">
          <div className="col-5">
            <h5>Department:</h5>
          </div>
          <div className="col-7">
            <SelectDepartment 
                departments={this.state.departments} 
                handleDepartmentChange={this.handleDepartmentChange} 
                department={this.state.department}
            />
          </div>                
        </div>
        <div className="row">
          <div className="col-12">
            <div className="select-sort">
              <div className="sort">Sort</div>
              <SelectSort department={this.state.department} handleSortChange={this.handleSortChange} />
            </div>                        
          </div>
        </div>
        <EmployeeList currentList={this.state.currentList} handleClickCard={this.handleClickCard}/>
      </div>
    );
  }
}

export default Directory;
