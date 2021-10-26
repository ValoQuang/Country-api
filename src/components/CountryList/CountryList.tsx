import React from "react";
import CountryInfo from "../CountryInfo/CountryInfo";

//Country info and sort function here
const CountryList =()=>{
    return (
        <div className ="countrylist__container">
            <div className ="countrylist__sort"></div>

            <div className ="countrylist__content">
                <CountryInfo/>
            </div>

            <div className ="countrylist__pagination"></div>

            
        </div>
    )
}

export default CountryList