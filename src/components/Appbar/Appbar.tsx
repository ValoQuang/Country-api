import React from "react";
import Logo from "../Logo";
import Search from "../Search/Search";
import {useSelector} from "react-redux";
import {CartState } from "../../types";

import "./Appbar.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@mui/material/Menu';

type AppbarProps={
    onClick:Function
    drawerState:boolean
    handleSearch: Function
}

const Appbar =(props:AppbarProps)=>{

    const {onClick, drawerState, handleSearch} = props;

    //cartReducer
    const cart = useSelector((state:any)=> state.CountryReducer.cart)
    
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
                <Search handleSearch={handleSearch}/>
              </div>
              <div className ="appbar__content-right">
                <FavoriteIcon />
                <div className= "counter">
                  {cart && cart.length}
                </div>
                
              </div>
              <div className = "appbar__content-card">
                <MenuIcon onClick={onDrawerClick}/>
              </div>      
            </div>
        </div>
    )
}

export default Appbar;