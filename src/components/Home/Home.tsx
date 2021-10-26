import React,{useState} from "react";
import CountryList from "../CountryList/CountryList";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";

import "./Home.scss";
import { Button } from "@material-ui/core";

const Home = ()=> {
    const[drawerState,setDrawerState]=useState(false)
    //handle drawerstate

    const handleDrawerState=(state:boolean)=>{
        setDrawerState(state);
    }

    return (
        <div className ="home">
            <Appbar onClick={handleDrawerState} drawerState={drawerState}/>
            <Sidebar onClick={handleDrawerState} drawerState={drawerState} />
                <div className ="home__content">
                    <CountryList/>
                </div>
        </div>
    )
}

export default Home;