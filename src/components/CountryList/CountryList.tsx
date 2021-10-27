import React, {useState, useEffect} from "react";
import CountryInfo from "../CountryInfo/CountryInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries, addCountryToCart } from "../../redux/actions";
import { AppState } from "../../types";

import { CircularProgress } from "@mui/material";
import './CountryList.scss';


type CountryListProps ={
    search: string
}
//Country info and sort function here
const CountryList =({search}:CountryListProps)=>{

    const countries = useSelector((state:AppState)=> state.CountryReducer.countries)
    const isLoading = useSelector((state:AppState)=> state.CountryReducer.isLoading)

    //Filter countries
    const [filteredCountries, setFilteredCountries] = useState(countries)
    
    useEffect(()=> {
        setFilteredCountries(filteredCountries)
    }, [countries])

    //filter countries with key and
    useEffect(()=> {
        const res = countries.filter((country:any) => country.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredCountries(res)
    },[search, countries])

    

    //get country from redux service
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchAllCountries());
    }
    ,[dispatch])

    return (
        <div className ="countrylist__container">
            <div className ="countrylist__sort"></div>

            <div className ="countrylist__content">
                {isLoading && <CircularProgress/>}
                {!isLoading && filteredCountries && filteredCountries.map((country:any)=> (
                        <CountryInfo {...country} key = {country.name} onClick = {()=> dispatch(addCountryToCart(country))}/>
                    )
                )}
                
            </div>

            <div className ="countrylist__pagination"></div>

            
        </div>
    )
}

export default CountryList