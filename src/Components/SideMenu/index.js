import React, { useState } from "react";
import { connect } from 'react-redux';
import Button from "../Button";
import Card from "../Card";

import "./SideMenu.scss";


const SideMenu = (props) => {

    const [ active, setActive ] = useState(false);

    const toggleClass = () => {
        setActive(!active);
    }
    const {hero1, hero2} = props.selectHeroes;

    return(
        <div className={`SideMenu ${active ? 'open' : null}`}>
            <div className={`open-slider ${active ? 'open' : null}`} onClick={toggleClass}>
            </div>
            { <Card hero={hero1} small disabled/> }
            { <Card hero={hero2} small disabled/> }
            <Button to="/battle" className="mt-3">FIGHT</Button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {selectHeroes: state.selectHeroes};
}

export default connect(mapStateToProps, null)(SideMenu);