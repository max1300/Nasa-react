import React from "react";
import nasa from "./NASA-logo.jpeg"

const Header = () => {
    return (
        <header>
            <h1>WELCOME IN SPACE</h1>
            <img src={nasa} alt="Logo de la nasa"/>
        </header>
    );
}
export default Header;