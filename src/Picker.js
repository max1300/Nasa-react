import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import NeoError from "./NeoError";


const Picker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [error, setError] = useState(null);

    const checkInterval = (startDate, endDate) => {
        const momentStartDate = moment(startDate);
        const momentEndDate = moment(endDate);

        if (momentEndDate.isBefore(momentStartDate)) {
            throw new Error("La date de fin ne peut être avant la date de début");
        }

        if (momentStartDate.add(7, "days").isBefore(momentEndDate)) {
            throw new Error("L'intervalle maximum est de 7 jours");
        }
    };

    useEffect(() => {
        try {
            checkInterval(startDate, endDate);
            setError(null);
        } catch (e) {
            setError({message: e.message});
        }
    }, [startDate, endDate]);


    return (
        <div className="container">


            <form className="form-group" style={{color: "white", marginTop: "2%", textAlign:"center"}}>
                <div className="form-group" style={{marginBottom:"2%"}}>
                    <h3>Date de début</h3>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        className="form-control"
                        onChange={date => setStartDate(date)}
                    />
                </div>
                <div className="form-group" style={{marginBottom:"2%"}}>
                    <h3>Date de fin</h3>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={endDate}
                        className="form-control"
                        onChange={date => setEndDate(date)}
                    />
                </div>

                <a href={`/neoApi/${startDate}&&${endDate}`} className="btn btn-primary">Soumettre la recherche</a>
            </form>
            <div className="container" style={{textAlign:"center"}}>
                <NeoError error={error} />
            </div>

        </div>
    );
}
export default Picker;