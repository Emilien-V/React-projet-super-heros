import React from "react";

import "./Checkbox.scss"

export default function Checkbox(props) {
    const {onCheck, check} = props
    return (
        <div className={`checkbox-sh ${props.publisher}`} onClick={() => onCheck()}>
            {check && <div className="check"/> }
        </div>
    );
}