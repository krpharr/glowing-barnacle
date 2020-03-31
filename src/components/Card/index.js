import React from "react";
import "./style.css";

function Card(props){
  return (
    <div className="card mb-3 mt-2">
      <div className="row">
        <div className="avatar-container col-4">
          <img className="avatar" src={props.avatar} alt="..."></img>
        </div>
        <div className="col-8 fp">
          <div>
            <div className="name">{props.firstName} {props.lastName}</div>
            <div className="department">{props.department}</div>
            <div>{props.title}</div>
          </div>
        </div>
        <div className="id">{props.id}</div>
      </div>            
    </div>
  );
}

export default Card;