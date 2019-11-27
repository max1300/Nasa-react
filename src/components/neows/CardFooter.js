import React from "react";

const CardFooter = (props) => {
    return <div className="card-body"
                style={{backgroundColor: "lightgray", textAlign: "center"}}>
        <p className="m-0" style={{fontWeight: "bold"}}>Km par heure:</p>
        <p> {props.arrondi1}</p>
        <p className="m-0" style={{fontWeight: "bold"}}>magnitude: </p>
        <p>{props.arrondi2}</p>
    </div>;
}

export default CardFooter;