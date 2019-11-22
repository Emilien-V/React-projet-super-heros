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
        if(search !== "") {
            props.fetchSearchHero(search);
            props.search(true);
        }  
    } 

    const handleRefresh = () => {
        props.search(false);
    }

    return(
        <div className="form d-flex ">
            <input onChange={handleChange} value={search} type="search" className="form-control"></input>
            <button className="btn btn-secondary ml-2" onClick={handleSubmit}>Chercher</button>
            <button className="btn btn-secondary ml-2" onClick={handleRefresh}>Refresh</button>
        </div>
    );
}

export default connect( null,{ fetchSearchHero })(SearchBar);