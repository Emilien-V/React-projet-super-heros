import React from "react";

import "./HpBar.scss"

export default function HpBar(props) {
    return (
        <div className="hp-container"><div className="hp" style={{width: `${props.hp}%`}}/></div>       
    );
}