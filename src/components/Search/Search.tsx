import React from "react";

import "./Search.scss";
import { Input } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';

const Search =() => {
    return(
        <div className ="search-box">
            <div className="search-box__wrapper">
            <Input placeholder="Search.." disableUnderline={true} />
            <SearchIcon/>
            </div>
        </div>
    );
};

export default Search;