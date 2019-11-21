import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss"

export default function Button(props) {
    if (props.to) {
        return (
            <Link to={props.to} className={`btn btn-sh ${props.className}`} >
                {props.children}
            </Link>
        );
    }
    
    return (
        <button className={`btn btn-sh ${props.className}`} onClick={() => props.onClick()}>
            {props.children}
        </button>
    );

    
}