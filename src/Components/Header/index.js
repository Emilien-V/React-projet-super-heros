import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light menu fixed-top">
            <Link className="navbar-brand" to="/"><div className="logo"></div></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/list">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/battle">Battle</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}