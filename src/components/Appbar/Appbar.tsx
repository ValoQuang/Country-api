import React from "react";
import Logo from "../Logo";
import Search from "../Search/Search";
import {useSelector} from "react-redux";
import { AppState } from "../../types";

import "./Appbar.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@material-ui/icons/Menu';

type AppbarProps={
    onClick:Function
    drawerState:boolean
}

const Appbar =(props:AppbarProps)=>{

    const {onClick, drawerState} = props;

    //cartReducer
    const cart = useSelector((state:AppState)=>state.cartReducer.cart)
    
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
                <FavoriteIcon />
                <p className= "counter">{cart && cart.length}</p>
              </div>
              <div className = "appbar__content-card">
                <MenuIcon onClick={onDrawerClick}/>
              </div>      
            </div>
        </div>
    )
}

export default Appbar;