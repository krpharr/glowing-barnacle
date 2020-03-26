import React from "react";
import "./style.css";

function Card(props){
    return (
        <div className="card mb-3 mt-2">
            <div className="row">
                <div className="avatar-container col-3 fp">
                    <img className="avatar" src={props.avatar} alt="..."></img>
                </div>
                <div className="col-5 fp">
                    <div>
                        <div className="name">{props.firstName} {props.lastName}</div>
                        <div className="department">{props.department}</div>
                        <div>{props.title}</div>
                    </div>
                </div>
                <div className="col-4 fp">
                    <div className="phone">{props.phone}</div>
                    <div className="email">{props.email}</div>
                </div>
            </div>            
        </div>
    );
}

export default Card;