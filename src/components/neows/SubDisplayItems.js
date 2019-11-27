import moment from "moment";
import _ from "lodash";
import React from "react";

const SubDisplayItems = (props) => {
    return <div>
        <h2 className="mt-4 border-bottom"
            style={{color: "white", textAlign: "center"}}>{moment(props.date).format("DD-MM-YYYY")}</h2>
        <div className="d-flex flex-wrap flex-lg-row justify-content-center align-items-center">
            {_.get(props.object, props.date).map(props.prop2)}
        </div>
    </div>;
}
export default SubDisplayItems;