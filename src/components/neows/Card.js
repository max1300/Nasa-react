import React from "react";
import CardHead from "./CardHead";
import CardFooter from "./CardFooter";

const Card = (props) => {
    return (
    <div className="card border-dark shadow mt-3 weather-card forecast-item">
        <CardHead el={props.el} arrondi={props.arrondi}/>
        <CardFooter arrondi1={props.arrondi1} arrondi2={props.arrondi2}/>
    </div>
    );
}

export default Card;