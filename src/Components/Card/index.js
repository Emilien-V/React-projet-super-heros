import React from "react";
import Checkbox from "../Checkbox"

import "./Card.scss"

const Card = props => {
    return (
        <div className={`card m-3 ${props.publisher}`}>
            <img src="https://via.placeholder.com/320x180" className="card-img-top" alt="placeholder" />
            <div className="card-body">
                <h5 className="card-title">{props.id}</h5>
                <p className="card-text">{props.title}</p>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <Checkbox publisher={props.publisher}/>
            </div>
        </div>
    );
}

export default Card;