import React,{useState} from "react";
import CountryList from "../CountryList/CountryList";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";

import "./Home.scss";

const Home = ()=> {
    const[drawerState,setDrawerState]=useState(false)
    //handle drawerstate
    const handleDrawerState=(state:boolean)=>{
        setDrawerState(state);
    }
    const [search, setSearch] = useState('')
    //handlesearch
    const handleSearch = (e:string):void =>{
        setSearch(e)
    }

    return (
        <div className ="home">
            <Appbar onClick={handleDrawerState} drawerState={drawerState} handleSearch={handleSearch} />
            <Sidebar onClick={handleDrawerState} drawerState={drawerState} />
                <div className ="home__content">
                    <CountryList search={search}/>
                </div>
        </div>
    )
}

export default Home;