import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import {useState} from "react";
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  function toggle(){
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#0f2544"
      showAlert("Changed to Dark Mode","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Changed to Light Mode","success")
    }
  }
  return (
  <>
  <Router>
  <div className='container'>
    <Navbar title="textUtils" about="About textUtils" mode={mode} toggle={toggle}/>
    <Alert alert={alert} showAlert={showAlert}/>
    <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Form heading = "Enter your text to analyze" mode={mode} showAlert={showAlert}/>}>          
          </Route>
    </Routes>
  </div>
  </Router>
  </>);
}

export default App;
