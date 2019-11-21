import React, {useState} from "react";
import { connect } from 'react-redux';

import Header from "../Header"
import Container from "../Container"
import Card from "../Card"
import HpBar from "../HpBar"
import Button from "../Button"

import "./Battle.scss"

const Battle = (props) => {
    const {selectHeroes} = props
    const [start, setStart] = useState(false)
    const [hp1, setHp1] = useState(100)
    const [hp2, setHp2] = useState(100)

    const handleStart = () => {
        setStart(true)
        
    }

    return (
        <Container id="battle" header={<Header/>}>
            <div className="row d-flex justify-content-around align-items-center flex-wrap mh-100vh">
                <div className="hero">
                    <Card hero={selectHeroes.hero1} disabled/>
                    {start && <HpBar hp={hp1}/>}
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src="./vs.svg" className="vs" alt="VS"/>
                    { selectHeroes.hero1 && selectHeroes.hero1 && !start &&
                        <Button className="mt-5" onClick={() => handleStart()}>Start battle</Button>
                    }
                </div>
                <div className="hero">
                    <Card hero={selectHeroes.hero2} disabled/>
                    {start && <HpBar hp={hp2}/>}
                </div>
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {selectHeroes: state.selectHeroes};
}

export default connect(mapStateToProps, null)(Battle);
  