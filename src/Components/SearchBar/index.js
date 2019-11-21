import React, { useState } from "react";
import { connect } from 'react-redux';
import { fetchSearchHero } from '../../actions/creators';


import "./SearchBar.scss"

const SearchBar = (props) => {

    const [search, setSearch] = useState("");

    const handleChange = event => {
        setSearch(event.target.value);
    }

    const handleSubmit = () => {
        props.fetchSearchHero(search);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={search} type="search"></input>
            <input type="submit"></input>
        </form>
    );
}

const mapStateToProps = (state) => {

    return {heroes: state.heroes};
    
}

export default connect( mapStateToProps,{ fetchSearchHero })(SearchBar);