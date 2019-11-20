import React from "react";
import Checkbox from "../Checkbox"

import "./Card.scss"

const Card = props => {
    return (
        <div className={`card m-3 ${props.biography['publisher']}`}>
            <img src={props.image.url} className="card-img-top" alt="placeholder" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-text">{props.biography['full-name']}</h6>
                <p className="card-text">{props.biography['publisher']}</p>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <Checkbox publisher={props.biography['publisher']}/>
            </div>
        </div>
    );
}

export default Card;