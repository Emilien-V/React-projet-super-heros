import React from "react";
import Checkbox from "../Checkbox"
import { connect } from 'react-redux';
import { selectHero, deselectHero } from '../../actions/creators';

import "./Card.scss"

const Card = props => {

    const isSelected = [props.selectHeroes.hero1, props.selectHeroes.hero2].some(hero => hero && hero.id === props.id);
    const {hero} = props

    return (
        <div className={`card ${hero ? hero.biography['publisher'] : 'disabled'}`}>
            {hero && <img src={hero.image.url} alt="img-card" />}
            <div className="card-circle">
            </div>
            <div className="card-text">
                {hero &&
                    <>
                        <h5 >{hero.name}</h5>
                        <h6 >{hero.biography['full-name']}</h6>
                        <p >{hero.biography['publisher']}</p>
                    </>
                }
            </div>
            {hero &&
                <div className="checker">
                    <Checkbox 
                        publisher={hero.biography['publisher']} 
                        onCheck={() => {isSelected ? props.deselectHero(hero) : props.selectHero(hero)}}
                        check={isSelected}
                    />
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {selectHeroes: state.selectHeroes};
}

export default connect(mapStateToProps, { selectHero, deselectHero })(Card);