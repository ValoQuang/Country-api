import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { MenuOutlined } from '@material-ui/icons';

import {AppState} from '../../types'

import Search from '../Search/Search'
import CartMenu from '../CartMenu/CartMenu'

import './appbar.scss'
import { Typography } from '@material-ui/core';

interface AppbarProps{
    onClick:Function
    drawerState:boolean   
}

const Appbar=(props:AppbarProps)=> {
    const {onClick,drawerState} =props
    //cart
    const cart=useSelector((state:AppState)=>state.cartReducer.cart) 
    //on drawer close 
    const onDrawerClick=()=>{
        //close the drawer
        //parent function 
        onClick(!drawerState)
    }
    //cart menu open related state and functions

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
  
    const handleCartMenuClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCartMenuClose = () => {
        setAnchorEl(null);
      };

    return (
        <div className="appbar btn__primary">
            <div className="appbar__content container">
                   {/* Logo area */}
                <div className="appbar__content-left">
                    <Typography>Country API</Typography>
                </div>
                   {/* Search box area */}
                <div className="appbar__content-search">                    
                    <Search/>
                </div>          
                <div className="appbar__content-right">
                      <CartMenu cart={cart} onClick={handleCartMenuClose} menuOpen={menuOpen} anchorEl={anchorEl}/>         
                    <div className="appbar__content-cart" onClick={handleCartMenuClick}>
                        <FavoriteBorderOutlined  className="cursor-pointer" />                
                        <div className={`appbar__content-cart-counter cursor-pointer ${cart.length>0?'active':''}`}  >
                            {cart && cart.length}
                        </div> 
                    </div>
                    <MenuOutlined className="cursor-pointer" onClick={onDrawerClick}/>
                </div>
            </div>         
        </div>
    )
}

export default Appbar
