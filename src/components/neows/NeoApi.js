import React, {useEffect, useState} from 'react';
import Axios from "axios";
import _ from "lodash";
import {parseISO} from "date-fns";
import moment from "moment";
import Loader from "../../utils/Loader";

const NeoApi = (props) => {
    const [items, setItems] = useState([]);
    const [displayDates, setDisplayDates] = useState({});
    const [loading, setLoading] = useState(true);

    const startDate = moment(props.match.params.startDate).format('YYYY-MM-DD');
    const endDate = moment(props.match.params.endDate).format('YYYY-MM-DD');

    useEffect(() => {
        setTimeout(() => {
            const axiosData = async () => {
                const nasaApi = await Axios(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.REACT_APP_API_KEY}`);
                const list = Object.keys(nasaApi.data.near_earth_objects).map(element => parseISO(element));
                const sortList = _.sortBy(list);
                setDisplayDates(sortList.map(el => el.getFullYear() + '-' + (el.getMonth() + 1) + '-' + el.getDate()));
                setItems(nasaApi.data.near_earth_objects);
                setLoading(false);
            }
            axiosData();
    }, 3000);
    }, [startDate, endDate])

    const arrondi = (nb) => {
        return Math.round(nb * 100) / 100;
    }

    return (

        <>
            <div style={{textAlign:"center"}}>
            <div className="d-inline-flex p-2 bd-highlight" style={{textAlign:"center"}}>
                {loading && <Loader className="d-flex justify-content-center"/>}
            </div>
        <div className="Neo">
            {items &&
            Object.keys(items).map((date, i) =>
                <div key={i}>
                    <h2 className="mt-4 border-bottom"
                        style={{color: "white", textAlign: "center"}}>{moment(date).format('DD-MM-YYYY')}</h2>
                    <div className="d-flex flex-wrap flex-lg-row justify-content-center align-items-center">
                        {_.get(items, date).map(el => (
                            <div className="card border-dark shadow mt-3 weather-card forecast-item">
                                <div className="card-header text-center bg-dark text-white">
                                    <h2>{el.name}</h2>
                                    <p className="m-0">date d'approche:</p>
                                    <p>{moment(el.close_approach_data[0].close_approach_date).format('DD-MM-YYYY')}</p>
                                    <p className="m-0">diamètre: </p>
                                    <p> {arrondi(el.estimated_diameter.meters.estimated_diameter_max)} mètres</p>
                                </div>
                                <div className="card-body" style={{backgroundColor: "lightgray", textAlign: "center"}}>
                                    <p className="m-0" style={{fontWeight: "bold"}}>Km par heure:</p>
                                    <p> {arrondi(el.close_approach_data[0].relative_velocity.kilometers_per_hour)}</p>
                                    <p className="m-0" style={{fontWeight: "bold"}}>magnitude: </p>
                                    <p>{arrondi(el.absolute_magnitude_h)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            )}
            <div className="container" style={{textAlign: "center", marginTop: "2%"}}>
                <a href="/" className="btn btn-primary btn-lg">
                    retour page d'accueil
                </a>
            </div>
        </div>
            </div>
        </>
    );

}
export default NeoApi;