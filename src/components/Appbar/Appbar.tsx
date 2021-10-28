import React from "react";
import Logo from "../Logo";
import Search from "../Search/Search";
import {useSelector} from "react-redux";
import {CartState } from "../../types";
import CartMenu from "../CartMenu/CartMenu";

import "./Appbar.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@material-ui/icons/Menu';


type AppbarProps={
    onClick:Function
    drawerState:boolean
    handleSearch: Function
}

const Appbar =(props:AppbarProps)=>{

    const {onClick, drawerState, handleSearch} = props;

    //cartReducer
    const cart = useSelector((state:CartState)=> state.CartReducer.cart)
    
    const onDrawerClick =()=>{
        onClick(!drawerState)
    }
    //CartMenu code component, copied from Marital UI, state and functionm
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };  

    return (
        <div className ="appbar" >
            <div className ="appbar__content container">
              <div className ="appbar__content-left">
                <h2>Quang</h2>
                <Logo/>
              </div>
              <div className ="appbar__content-search">
                <Search handleSearch={handleSearch}/>
              </div>

              <div className ="appbar__content-right" onClick={handleClick}  >
                <FavoriteIcon />
                <div className={`counter cursor-pointer ${cart.length>0?'active':''}`}  >
                  {cart && cart.length}
                </div>   
              </div>
              <CartMenu 
                  cart={cart} 
                  menuOpen={menuOpen} 
                  onClick ={handleClose}
                  anchorEl={anchorEl}/>
              <div className = "appbar__content-card">
                <MenuIcon onClick={onDrawerClick}/>
              </div>      
            </div>
        </div>
    )
}

export default Appbar;