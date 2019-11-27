import React from "react";

const Alert = ({ type, message }) => (
    <div alert="true" className={`alert-${type}`} style={{color: "Red", background:"none", fontSize:"25px"}}>
        {message}
    </div>
);

export default Alert;