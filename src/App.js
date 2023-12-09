import { ThemeProvider } from '@emotion/react';
import './App.css';
import TopBar from './views/TopBar';
import Footer from './views/Footer';
import Home from './views/Home';
import Projects from './views/Projects';
import ContactMe from './views/ContactMe';
import Experiences from './views/Experiences';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: 'black',
    }
  },
});
function App() {
  return (
    
    <div>
      <Router>
      <div className="App">
        <div className="App-TopBar">
          <ThemeProvider theme={theme}>
            <TopBar/>
          </ThemeProvider>
        </div>
        <div  style={{ flex: 1, overflowY: 'auto'}}>
        <div className='App-Body'>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/experience" element={<Experiences/>} />
              <Route path="/contact" element={<ContactMe/>} />
            </Routes>
        </div>
        
        <div className='App-Footer'>
          <ThemeProvider theme={theme}>
            <Footer/>
          </ThemeProvider>
        </div>
      </div>
      </div>
      </Router>
    </div>
    
  );
}

export default App;
