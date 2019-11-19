import React, {useState} from "react";

import "./Checkbox.scss"

export default function Checkbox(porps) {
    const [check, setCheck] = useState(false);
    return (
        <div className={`checkbox-sh ${porps.publisher}`} onClick={() => setCheck(!check)}>
            {check && <div className="check"/> }
        </div>
    );
}