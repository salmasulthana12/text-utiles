import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success')
    }

  }
  return (
    <Router>
     <Navbar mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className='container my-3'>
      <Routes>
     <Route path='/' element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
     <Route path='/about' element={<About mode={mode}/>}/>
     </Routes>
     </div>
    </Router>
  );
}

export default App;
