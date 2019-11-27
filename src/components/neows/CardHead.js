import moment from "moment";
import React from "react";

const CardHead = (props) => {
    return <div className="card-header text-center bg-dark text-white">
        <h2>{props.el.name}</h2>
        <p className="m-0">date d'approche:</p>
        <p>{moment(props.el.close_approach_data[0].close_approach_date).format("DD-MM-YYYY")}</p>
        <p className="m-0">diamètre: </p>
        <p> {props.arrondi} mètres</p>
    </div>;
}

export default CardHead;