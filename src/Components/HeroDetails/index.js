import React from 'react';


import "./HeroDetails.scss";

const HeroDetails = (props) => {
    console.log(props)

    return(
            <div class="row align-items-center mt-5">
            <div class="col-xl-6 col-xs-12 img">
                <img className="img-details " src={props.image.url} />
            </div>
            <div class="col-xl-6 col-xs-12 text">
            <div className="text-details">
                    <h1>{props.name}</h1>
                    <div className="main-text">
                        <div className="identity">
                            <p><span>Name</span> : {props.name}</p>
                            <p><span>Real identity</span> : {props.biography['full-name']}</p>
                        </div>
                        <div className="information">
                            <p><span>Place of birth</span> : {props.biography['place-of-birth']}</p>
                            <p><span>First appearance</span> : {props.biography['first-appearance']}</p>
                            <p><span>Publisher</span> : {props.biography['publisher']}</p>
                            <p><span>Alignment</span> : {props.biography['alignment']}</p>
                        </div>
                        <div className="abilities row mt-5">
                            <div className="col">
                                <p><span>Intelligence</span> : {props.powerstats['intelligence']}</p>
                                <p><span>Strength</span> : {props.powerstats['strength']}</p>
                                <p><span>Speed</span> : {props.powerstats['speed']}</p>
                                <p><span>Durability</span> : {props.powerstats['durability']}</p>
                                <p><span>Power</span> : {props.powerstats['power']}</p>
                                <p><span>Combat</span> : {props.powerstats['combat']}</p>
                            </div>
                            <div className="col">
                                <p><span>Gender</span> : {props.appearance['gender']}</p>
                                <p><span>Race</span> : {props.appearance['race']}</p>
                                <p><span>Height</span> : {props.appearance['height'][1]}</p>
                                <p><span>Weight</span> : {props.appearance['weight'][1]}</p>
                                <p><span>Eyes</span> : {props.appearance['eye-color']}</p>
                                <p><span>Hair</span> : {props.appearance['hair-color']}</p>
                            </div>
                        </div>

                        <div className="occupation mt-5">
                            <span>Occupation</span> : {props.work['occupation']}
                        </div>
                    </div>
                </div>
            </div>
          </div>
    );
}

export default HeroDetails;