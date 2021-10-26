import React from "react";
import "./Sidebar.scss";

import { Drawer } from "@mui/material";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Button } from "@material-ui/core";

type  SidebarProp={
    drawerState:boolean,
    onClick: Function
};

const Sidebar=(props:SidebarProp) =>{
    const {onClick,drawerState} =props
    //close drawer functi
    const onCloseDrawer =()=>{
        onClick(!drawerState)
    }
    return(
        <div className="sidebar">
            <Drawer
            anchor ="right" 
            open={drawerState} onClose={onCloseDrawer}>
                <div className="sidebar__drawer">
                    <CancelPresentationIcon
                    onClick = {onCloseDrawer}/>
                <div className ="sidebar__content">
                <Button className ="theme__button">Dark Theme</Button>
                </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Sidebar