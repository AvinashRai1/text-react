//import logo from './logo.svg'; 
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';     

import React,{useState} from "react";




function App() {// camelcase//javascript -->curly brackets ke andar
  const[mode,setmode]=useState('light');   
  const[mode1,setmode1]=useState('light');    
  const[alert,setalert]=useState(null);// alert-->objext

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      showalert('',null);  
    }, "2000");
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');  
       document.body.style.backgroundColor='rgb(14 4 56)';    
       showalert("dark mode enabled","success");
    }
    else{
      setmode('light');   
      document.body.style.backgroundColor='white';  
      showalert("light mode enabled","success");   
 
    }
  }
  const togglemode1=()=>{
    if(mode1==='light'){
      setmode1('green');    
       document.body.style.backgroundColor='green';    
       showalert("green mode enabled","primary");
    }
    else{
      setmode1('light');    
      document.body.style.backgroundColor='white';   
      showalert("light mode enabled","primary");     
 
    }
  }
  return (
    <>
             
 {/* <Navbar title="avinash" aboutText="barbie123"/>   */} 
 { <Navbar title="avinash" mode={mode} togglemode={togglemode} mode1={mode1} togglemode1={togglemode1} />   }   
 <Alert alert={alert}/>   

 <div className="container my-5">  
 <Textform heading="enter text to anlyse or be ready" mode={mode} showalert={showalert}/>       
 {/* <About/>    */} 
  </div>   
      
  </> 


  );
}

export default App;
