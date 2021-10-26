import React from "react";
import Logo from "../Logo";
import Search from "../Search/Search";

import "./Appbar.scss"
import { Gradient } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';

type AppbarProps={
    onClick:Function
    drawerState:boolean
}

const Appbar =(props:AppbarProps)=>{

    const {onClick, drawerState} = props;
    const onDrawerClick =()=>{
        onClick(!drawerState)
    }
    return (
        <div className ="appbar">
            <div className ="appbar__content container">
              <div className ="appbar__content-left">
                <h2>Country App</h2>
                <Logo/>
              </div>
              <div className ="appbar__content-search">
                <Search/>
              </div>
              <div className ="appbar__content-right">
                <Gradient/>
                <p className= "counter">10</p>
              </div>
              <div className = "appbar__content-card">
                <MenuIcon onClick={onDrawerClick}/>
              </div>      
            </div>
        </div>
    )
}

export default Appbar;