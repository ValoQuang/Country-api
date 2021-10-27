import React, {useEffect} from "react";
import CountryInfo from "../CountryInfo/CountryInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../../redux/actions";
import { AppState } from "../../types";

import { CircularProgress } from "@mui/material";

//Country info and sort function here
const CountryList =()=>{

    const countries= useSelector((state:AppState)=>state.CountryReducer.countries)
    const isLoading= useSelector((state:AppState)=>state.CountryReducer.isLoading)
    //get country from redux service
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchAllCountries());
    }
    ,[])

    return (
        <div className ="countrylist__container">
            <div className ="countrylist__sort"></div>

            <div className ="countrylist__content">
                {isLoading && <CircularProgress/>}
                {!isLoading && countries && 
                        countries.map((country:any)=> (
                        <CountryInfo {...country}/>
                    )
                )}
                
            </div>

            <div className ="countrylist__pagination"></div>

            
        </div>
    )
}

export default CountryList