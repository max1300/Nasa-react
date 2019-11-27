import React, {useEffect, useState} from 'react';
import Axios from "axios";
import moment from "moment";
import Loader from "../../utils/Loader";
import {API_URL, API_KEY} from "../../Constants";
import DisplayItems from "./DisplayItems";
import Card from "./Card";
import SubDisplayItems from "./SubDisplayItems";


const NeoApi = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const startDate = moment(props.match.params.startDate).format('YYYY-MM-DD');
    const endDate = moment(props.match.params.endDate).format('YYYY-MM-DD');

    useEffect(() => {
        setTimeout(() => {
            const axiosData = async () => {
                const nasaApi = await Axios(`${API_URL}/feed?start_date=${startDate}&end_date=${endDate}${API_KEY}`);
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
            <div style={{textAlign: "center"}}>
                <div className="d-inline-flex p-2 bd-highlight" style={{textAlign: "center"}}>
                    {loading && <Loader className="d-flex justify-content-center"/>}
                </div>
                <DisplayItems items={items} callbackfn={(date, i) =>
                    <SubDisplayItems key={i} date={date} object={items} prop2={el => (
                        <Card
                            el={el}
                            arrondi={arrondi(el.estimated_diameter.meters.estimated_diameter_max)}
                            arrondi1={arrondi(el.close_approach_data[0].relative_velocity.kilometers_per_hour)}
                            arrondi2={arrondi(el.absolute_magnitude_h)}
                        />
                    )}/>
                }/>
            </div>
    );
}
export default NeoApi;