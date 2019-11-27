import React from "react";
import {DoubleBounce} from "better-react-spinkit";

const Loader = () => {

        return (
            <div className="container-fluid" style={{textAlign:"center"}}>
                <DoubleBounce size={600} color={"black"}  />
            </div>
        );
}

export default Loader;