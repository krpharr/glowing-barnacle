import React from "react";
import data from "../../data/data";
import "./style.css";

class EmployeeProfile extends React.Component{
    state = {
        employee: {}
    };

    componentDidMount(){
        const {id} = this.props.match.params;
        const employee = data.filter(e=> {
            return e.id === id;
        });
        this.setState({employee: employee[0]});
        
    };

    render(){
        const {firstName, lastName, department, title, avatar, phone, email} = this.state.employee;

        return(
            <div className="container">
                 <h1 className="text-center">Sort Schmort, Inc.</h1>
                <div className="row mt-2 top-row">
                    <div className="col-6">
                        <img className="image" src={avatar} alt={`${firstName} ${lastName}`}></img>
                    </div>
                    
                    <div className="col-6 contact-container">
                        <a className="contact-container" href={`tel:${phone}`}>
                            <i className="material-icons">phone</i>
                            <h2 className="phone">{phone}</h2>
                        </a>
                        <a className="contact-container" href={`mailto:${email}`}>
                            <i className="material-icons">email</i>
                            <h2 className="email">{email}</h2>
                        </a>
                    </div>
                </div>
                
                <h1>{`${firstName} ${lastName}`}</h1>
                <h2>{department}</h2>
                <h3 className="font-italic">{title}</h3>
            </div>
        );
    }
}

export default EmployeeProfile;