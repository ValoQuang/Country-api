import React, {useState} from 'react';
import Appbar from './components/Appbar/Appbar'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
//base style
import './styles/_base.scss'

function App() {
  const [drawerState, setDrawerState] = useState(false) 
  //handle drawer state
    const handleDrawerState=(state:boolean)=>{
        setDrawerState(state)
    }
 
  return (  
    <div className="App">
       {/* appbar component  */}
       <Header/>
       <Appbar onClick={handleDrawerState} drawerState={drawerState}/>
      {/* Sidebar  */} 
      <Home/>            
      <Sidebar onClick={handleDrawerState} drawerState={drawerState}/>   
    </div>
  );
}

export default App;
