import React, {  useEffect } from "react";
import Card from "../Card";

import "./SearchResults.scss";
import { connect } from 'react-redux';



const SearchResults = (props) => {

    console.log(props.searchHeroes[0] && props.searchHeroes[0].results);



    return (
        
           <div>
               {!props.searchHeroes[0] ? <p>Attendez</p> : <div className="d-flex flex-wrap justify-content-center container">
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