import React, { useState } from "react";
import { connect } from 'react-redux';
import { fetchSearchHero } from '../../actions/creators';


import "./SearchBar.scss"

const SearchBar = (props) => {

    const [search, setSearch] = useState("");

    const handleChange = event => {
        setSearch(event.target.value);
        if(event.target.value = "") {
            props.search(false);
        }
    }

    const handleSubmit = () => {
        props.fetchSearchHero(search);
        props.search(true);
    }

    const handleRefresh = () => {
        props.search(false);
    }

    return(
        <div className="form">
            <input onChange={handleChange} value={search} type="search"></input>
            <button onClick={handleSubmit}>Chercher</button>
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    );
}

export default connect( null,{ fetchSearchHero })(SearchBar);