import React from "react";
import Checkbox from "../Checkbox"
import { connect } from 'react-redux';
import { selectHero, deselectHero } from '../../actions/creators';

import "./Card.scss"

const Card = props => {

    const isSelected = [props.selectHeroes.hero1, props.selectHeroes.hero2].some(hero => hero && hero.id === props.id);

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
                    onCheck={() => {isSelected ? props.deselectHero(props) : props.selectHero(props)}}
                    check={isSelected}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {selectHeroes: state.selectHeroes};
}

export default connect(mapStateToProps, { selectHero, deselectHero })(Card);