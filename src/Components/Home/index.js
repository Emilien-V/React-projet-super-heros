import React from "react";
import Container from "../Container"
import Button from "../Button"

import "./Home.scss"

export default function Home() {
    return (

        <Container id="home" >
            <div className="d-flex justify-content-center align-items-center flex-column">
                <img src="./logo.svg" alt="heros museum"/>
                <Button to="/list" className="mt-5">Start</Button>
            </div>
        </Container>
    );
}