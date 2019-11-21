import React from "react";
import { connect } from 'react-redux';

import Header from "../Header"
import Container from "../Container"
import ScoreboardItem from "../ScoreboardItem"

import "./Scoreboard.scss"

const Scoreboard = (props) => {

    console.log(props.scoreboard)

    return (
        <Container id="scoreboard" header={<Header/>}>
            <div className="mt-5">
                <h1 className="mt-5 mb-5">Scoreboard</h1>
            { props.scoreboard.length > 0 ?
                props.scoreboard.map((heroes) => (
                    <div className="d-flex mt-3 align-items-center justify-content-center">
                        <ScoreboardItem hero={heroes[0]}/>
                        <div className="trait"></div>
                        <ScoreboardItem hero={heroes[1]} reverse/>
                    </div>
                )) : 
                <p className="text-muted text-center">Scoreboard is empty</p>
            }
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {scoreboard: state.scoreboard};
}

export default connect(mapStateToProps, null)(Scoreboard);
  