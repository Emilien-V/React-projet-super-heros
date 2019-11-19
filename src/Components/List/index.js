import React from "react";
import Card from "../Card"
import Header from "../Header"
import Container from "../Container"

import "./List.scss";

export default function List() {
    return (
        <Container id="list" header={<Header/>}>
           <div className="d-flex flex-wrap justify-content-center">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Container>
    );
}