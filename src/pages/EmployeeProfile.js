import React from "react";

class EmployeeProfile extends React.Component{
    state = {
        id: ""
    };

    componentDidMount(){
        const {id} = this.props.match.params;
        console.log(id);
    };

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default EmployeeProfile;