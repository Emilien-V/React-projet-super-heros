import React, {useState} from "react";

import "./Checkbox.scss"

export default function Checkbox(props) {
    const [check, setCheck] = useState(false);
    return (
        <div className={`checkbox-sh ${props.publisher}`} onClick={() => setCheck(!check)}>
            {check && <div className="check"/> }
        </div>
    );
}