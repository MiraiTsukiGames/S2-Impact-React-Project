import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timer from "./pages/Timer";
import './App.css';
import ReactSwitch from "react-switch";
import Footer from "./components/footer/footer";
import { useThemeContext } from "./context/Themecontext";


function App() {
  const {contextTheme, setContextTheme} = useThemeContext();

  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === 'Light' ? 'Dark' : 'Light'))
    setChecked(nextChecked)
  }

  return (
  <div className="App" id={contextTheme}>
  <header className="App-header">
  <p>{contextTheme} Mode</p>
  <ReactSwitch
            onChange={handleSwitch}
            checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch" />
  
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
    </header>
    <Footer />
    </div>
  );
}

export default App;