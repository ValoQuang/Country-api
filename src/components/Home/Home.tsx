import React,{useState , useEffect} from "react";
import CountryList from "../CountryList/CountryList";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";
import {fetchAllCountries} from "../../redux/actions";
import {useDispatch} from "react-redux";

import "./Home.scss";


const Home = ()=> {
    const[drawerState,setDrawerState]=useState(false)
    //handle drawerstate
    const handleDrawerState=(state:boolean)=>{
        setDrawerState(state);
    }

    //dispatch action to fetch countries api
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllCountries());
    }
    ,[dispatch]);


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