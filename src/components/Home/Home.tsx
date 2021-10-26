import React from "react";
import { Button } from "@material-ui/core";
import Appbar from "../Appbar/Appbar";

import "./Home.scss";

const Home = ()=> {
    return (
        <div className ="home">
        <Appbar/>
        <Button>Hello</Button>
        </div>
    )
}

export default Home;