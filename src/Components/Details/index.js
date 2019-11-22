import React from 'react';
import { connect } from 'react-redux';
import HeroDetails from '../HeroDetails';
import Container from '../Container';
import Header from '../Header';
import Spinner from "../Spinner"

import { fetchHero } from '../../actions/creators';

import "./Details.scss";

const Details = (props) => {

    const hero = props.heroes.find(hero => hero.id === props.match.params.id);

    if(hero) {
        return(
            <Container id="details" header={<Header/>}>
                <HeroDetails {...hero} />
            </Container>
        );
    } else {
        props.fetchHero(props.match.params.id);
        return(
            <Spinner />
        )
    }
    
}

const mapStateToProps = (state) => {
    return { heroes: state.heroes };
}

export default connect(mapStateToProps, { fetchHero })(Details);