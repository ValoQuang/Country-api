import React from "react";

import "./Search.scss";
import { Input } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';

type SearchType = {
    handleSearch: Function
}

const Search =({handleSearch}:SearchType) => {
    
    const handleInput = (e:any) => {
        handleSearch(e.target.value);
    }

    return(
        <div className ="search-box">
            <div className="search-box__wrapper">
            <Input 
                placeholder="Search.." 
                disableUnderline={true} 
                onChange ={handleInput}
            />
            <SearchIcon/>
            </div>
        </div>
    );
};

export default Search;