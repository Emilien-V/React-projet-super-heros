import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';

import Header from "../Header"
import Container from "../Container"
import Card from "../Card"
import HpBar from "../HpBar"
import Button from "../Button"

import "./Battle.scss"

let intervalHero1
let intervalHero2

const Battle = (props) => {
    const {hero1, hero2} = props.selectHeroes
    const [start, setStart] = useState(false)
    const [hp1, setHp1] = useState(100)
    const [hp2, setHp2] = useState(100)
    const [win, setWin] = useState(0)
    const [end, setEnd] = useState(false)

    useEffect(() => (() => {
        stopGame()
    }),[])

    const handleStart = () => {
        setStart(true)
        const {intelligence: int1, durability: dur1, speed: spe1, combat: comb1, strength: str1, power: pow1} = hero1.powerstats;
        const {intelligence: int2, durability: dur2, speed: spe2, combat: comb2, strength: str2, power: pow2} = hero2.powerstats;

        console.log('start')

        intervalHero1 = setInterval(() => {
            const hit = (parseInt(comb1)+parseInt(str1)+parseInt(pow1))/30*Math.random()*parseInt(int1)/50
            console.log(hit);
            
            setHp2(hp2 => {
                if (hp2 - hit < 0) {
                    stopGame()
                    setWin(1)
                    return 0
                }
                return (hp2 - hit)
            })
        }, 500-spe1*2)

        intervalHero2 = setInterval(() => {
            const hit = (parseInt(comb2)+parseInt(str2)+parseInt(pow2))/30*Math.random()*parseInt(int1)/50
            
            setHp1(hp1 => {
                
                if (hp1 - hit < 0) {
                    stopGame()
                    setWin(2)
                    return 0
                }
                return (hp1 - hit)
            })
            console.log(hp1);
            
        }, 500-spe2*2)
        
    }

    const stopGame = () => {
        setEnd(true)
        clearInterval(intervalHero1)
        clearInterval(intervalHero2)
    }

    return (
        <Container id="battle" header={<Header/>}>
            <div className="row d-flex justify-content-around align-items-center flex-wrap mh-100vh">
                <div className={`hero ${win === 1 ? 'win' : ''} ${win === 2 ? 'loose' : ''}`}>
                    <Card hero={hero1} disabled/>
                    {start && <HpBar hp={hp1}/>}
                </div>
                <div className="d-flex flex-column align-items-center">
                    <img src="./vs.svg" className="vs" alt="VS"/>
                    { hero1 && hero2 && !start &&
                        <Button className="mt-5" onClick={() => handleStart()}>Start battle</Button>
                    }
                    { hero1 && hero2 && end &&
                        <Button className="mt-5" to="/">Scoreboard</Button>
                    }
                </div>
                <div className={`hero ${win === 1 ? 'loose' : '' } ${win === 2 ? 'win' : '' }`}>
                    <Card hero={hero2} disabled/>
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
  