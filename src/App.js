import React, {Component} from "react";
import theme from "./theme/theme";
import {ThemeProvider} from "@mui/material/styles";
import ResponsiveAppBar from "./components/NavBar.jsx";
import HomePage from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import ExmPage from "./components/ExmPage.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FloatBotButton from "./components/chatbotComponents/FloatBotButton";



class App extends Component {
    render() {
        return(
          
          <Router>
            <ThemeProvider theme={theme}>
              <div className="root" style={{display:'flex', flexDirection:'column', height:'100%'}}>
                <div className="navContainer">
                    {/* NavBar Responseive */}
                    <ResponsiveAppBar />                
                </div>
                <div style={{padding:'10px', minHeight:'80vh'}} className='mainContainer'>
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/examenes" element={<ExmPage />} />
                  </Routes>
                </div>
                <div className="FloatBotButtonContainer">
                  {/* <FloatBotButton /> */}
                  <FloatBotButton />
                </div>
                <div className="footerContainer" >
                    {/* Footer */}
                    <Footer />
                </div>
              </div>
            </ThemeProvider>
          </Router>
        );
    }
}

export default App;