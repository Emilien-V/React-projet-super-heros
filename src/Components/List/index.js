import React, { useState, useEffect } from "react";
import Card from "../Card"
import SideMenu from '../SideMenu'
import Header from "../Header"
import Container from "../Container"
import SearchBar from "../SearchBar"
import SearchResults from "../SearchResults"


import "./List.scss";
import { connect } from 'react-redux';
import { fetchFirstHeroes } from '../../actions/creators';


const List = (props) => {

    const [ search, setSearch ] = useState(false);

    return (
        <Container id="list" header={<Header/>}>
            <SideMenu />
            <SearchBar search={(e) => setSearch(e)}/>
            {search ? <SearchResults /> : <div className="d-flex flex-wrap justify-content-center container">
           {props.heroes.map((hero,index) => {
                   return(
                        <Card hero={hero} key={index}/>
                   );
               }
               )
               
            }
            </div>}
           
        </Container>
    );
}

const mapStateToProps = (state) => {

    return {heroes: state.heroes};
}

export default connect(
    mapStateToProps,
     { fetchFirstHeroes })
     (List);