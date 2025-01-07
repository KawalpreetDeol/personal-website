import { ThemeProvider } from '@emotion/react';
import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './views/Home';
import Projects from './views/Projects';
import ContactMe from './views/ContactMe';
import Portfolio from './views/Portfolio';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import socialMediaData from './data/socialMediaData.json';
import SocialMediaSidebar from './components/SocialMediaSidebar';
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
        <div  style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', marginTop: '70px'}}>
        <div className='App-Body'>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
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
      <SocialMediaSidebar socialMediaData={socialMediaData}/>
    </div>
    
  );
}

export default App;
