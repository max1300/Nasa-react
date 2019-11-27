import React from "react";
import nasa from "../NASA-logo.jpeg";

const Header = () => {
    return (
        <header>
            <h1 style={{fontFamily:"Star Jedi arial", fontWeight:"bold", textShadow: "2px 0 0 #FDEE00, -2px 0 0 #FDEE00, 0 2px 0 #FDEE00, 0 -2px 0 #FDEE00, 1px 1px #FDEE00, -1px -1px 0 #FDEE00, 1px -1px 0 #FDEE00, -1px 1px 0 #FDEE00", fontSize:"55px", color:"black"}}>WELCOME TO SPACE</h1>
            <img src={nasa} alt="Logo de la nasa"/>
        </header>
    );
}
export default Header;