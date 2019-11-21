import React, { useState } from "react";
import Button from "../Button";
import Card from "../Card";

import "./SideMenu.scss";


const SideMenu = () => {

    const [ active, setActive ] = useState(false);

    const toggleClass = () => {
        setActive(!active);
        console.log(active);
    }

    return(
        <div className={`SideMenu ${active ? 'open' : null}`}>
            <div className={`open-slider ${active ? 'open' : null}`} onClick={toggleClass}>
            </div>

            <Card biography={{publisher: 'DC'}}/>

            <Button to="/battle" className="mt-5">FIGHT</Button>
        </div>
    );
}

export default SideMenu;