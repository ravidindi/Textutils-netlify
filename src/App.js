import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextFile from './Components/TextFile';
import Alert from './Components/Alert';
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState("light");
  const [style, setstyle] = useState({ backgroundColor: "white" });
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      setstyle({
        backgroundColor: "white"
      })
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","Success: ");
    }
    else {
      setmode("dark");
      setstyle({
        color: "white"
      });
      document.body.style.backgroundColor = "#243c51";
      showAlert("Dark mode has been enabled","Success: ");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" about="about this site" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <TextFile style={style} showAlert={showAlert} />
    </>
  );
}

export default App;
