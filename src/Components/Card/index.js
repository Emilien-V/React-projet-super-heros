import React from "react";
import Checkbox from "../Checkbox"
import { connect } from 'react-redux';
import { selectHero } from '../../actions/creators';

import "./Card.scss"

const Card = props => {

    return (
        <div className={`card ${props.biography['publisher']}`}>
            <img src={props.image.url} alt="img-card" />
            <div className="card-circle">
            </div>
            <div className="card-text">
                <h5 >{props.name}</h5>
                <h6 >{props.biography['full-name']}</h6>
                <p >{props.biography['publisher']}</p>
            </div>
            <div className="checker">
                <Checkbox 
                    publisher={props.biography['publisher']} 
                    onCheck={() => {props.selectHero(props)}}
                    check={[props.selectHeroes.hero1, props.selectHeroes.hero2].some(hero => hero && hero.id === props.id)}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {selectHeroes: state.selectHeroes};
}

export default connect(mapStateToProps, { selectHero })(Card);