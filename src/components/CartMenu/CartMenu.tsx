import React from "react";
import { useDispatch } from "react-redux";
import { removeCountryFromCart } from "../../redux/actions";

import "./CartMenu.scss";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import DeleteIcon from '@mui/icons-material/Delete';


type CartMenuProps = {
    cart:{}[]
    menuOpen:boolean
    anchorEl:null | HTMLElement
    onClick:Function
}

const CartMenu =({cart, onClick,menuOpen,anchorEl}:CartMenuProps)=> {
    const dispatch = useDispatch()
    //copy from menu in MaterialUI page
    const handleClose = () => {
         onClick()
    };
    //copy from menu in MaterialUI page
    return (
        <div className="cartmenu">
             <Menu  className = "cartmenu__container"
                    id="fade-menu"
                    MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    open ={menuOpen}
                >
                  <p >Cart items</p>
                  <MenuItem onClick={handleClose}>
                  {cart.length===0 && 
                    <div className="cartmenu__empty">
                        <p>No items in the cart </p>
                    </div>
                  }

                  {cart && cart.map((country:any)=>(
                      <div className="cartmenu__menu-item">
                      <img src={country.flag} alt={country.name} width ="100" height ="70" />
                      <p>{country.name}</p>
                      <DeleteIcon className="cartmenu__delete-icon" onClick={()=>dispatch(removeCountryFromCart(country))}/>
                    </div>

                  ))}
                  </MenuItem>   
                </Menu>

        </div>
    )
}

export default CartMenu


    
  
    