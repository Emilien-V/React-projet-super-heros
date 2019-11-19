import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss"

export default function Button(props) {
    return (
        <Link to={props.to} className={`btn btn-sh ${props.className}`} >
            {props.children}
        </Link>
    );
}