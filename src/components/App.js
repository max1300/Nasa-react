import '../App.scss';
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NeoApi from "../components/neows/NeoApi";
import Picker from "./Picker";
import MySound from "../utils/MySound";




const App = () => {

    return (
        <>
            <Header/>
            <MySound/>
            <Router>
                <div>
                    <Switch>
                        <Route path="/neoApi/:startDate&&:endDate" component={NeoApi} />
                        <Route path="/" component={Picker} />
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
