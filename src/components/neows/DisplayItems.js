import React from "react";


const DisplayItems = (props) => {
    return (
        <div className="Neo">
            {props.items &&
            Object.keys(props.items).map(props.callbackfn
            )}
            <div className="container" style={{textAlign: "center", marginTop: "2%"}}>
                <a href="/" className="btn btn-primary btn-lg">
                    retour page d'accueil
                </a>
            </div>
        </div>
    );
}
export default DisplayItems;