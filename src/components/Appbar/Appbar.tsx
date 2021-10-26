import React from "react";
import Logo from "../Logo";

import "./Appbar.scss"

const Appbar =()=>{
    return (
        <div className ="appbar">
            <div className ="appbar__content container">
            <div className ="appbar__container-left">
                <h2>Country App</h2>
                <Logo/>
            </div>
            <div className ="appbar__container-search">
                Search
            </div>
            <div className ="appbar__container-right">
                right sideitems
            </div>
            </div>

        </div>
    )
}

export default Appbar;