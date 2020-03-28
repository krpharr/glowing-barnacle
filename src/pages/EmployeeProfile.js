import React from "react";
import data from "../data/data";

class EmployeeProfile extends React.Component{
    state = {
        employee: {}
    };

    componentDidMount(){
        const {id} = this.props.match.params;
        // console.log(id);
        const employee = data.filter(e=> {
            return e.id === id;
        });
        // console.log(employee);
        this.setState({employee: employee[0]});
        
    };

    render(){
        const {firstName, lastName, department, title, avatar, phone, email} = this.state.employee;

        return(
            <div>
                <img src={avatar} alt={`${firstName} ${lastName}`}></img>
                <h1>{`${firstName} ${lastName}`}</h1>
                <h2>{department}</h2>
                <h3>{title}</h3>
                <h2>{phone}</h2>
                <h2>{email}</h2>
            </div>
        );
    }
}

export default EmployeeProfile;