import Home from './components/Home/Home';


import {createTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";


//create material ui theme
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <div className="App">
      <Home/>
    </div>
    </ThemeProvider>
  );
}

export default App;
