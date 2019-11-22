import React from "react";
import Card from "../Card";

import "./SearchResults.scss";
import { connect } from 'react-redux';
import Spinner from '../Spinner';



const SearchResults = (props) => {

    return (
        
           <div>
               { props.searchHeroes[0] &&
               props.searchHeroes[0].error ? <p className="text-center text-muted mt-2">{props.searchHeroes[0].error}</p> :
               !props.searchHeroes[0] ? <Spinner /> : <div className="d-flex flex-wrap justify-content-center container">
               {props.searchHeroes[0].results.map((hero,index) => {
                       return(
                            <Card hero={hero} key={index}/>
                       );
                   }
                   )
                   
                }
                </div>}  
           </div>
    );
}

const mapStateToProps = (state) => {

    return {searchHeroes: state.searchHeroes};
}

export default connect(
    mapStateToProps,
     null)
     (SearchResults);