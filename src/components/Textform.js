import React,{useState} from "react";
// useState 

export default function Textform(props) {  
   
    //text="new text" -->error dega 
   // setText("new text"); // correct way to change state  
   // text-->state variable 
   const handleUpClick=()=>{ 
    // console.log("Button ws clicked" + text);  
     let newtext = text.toUpperCase()
     setText(newtext);      
    props.showalert("CONVERTED TO UPPERCASE","success");   


   }
   const handlelowClick=()=>{ 
   // console.log("Button ws clicked" + text);   
    let newtext = text.toLowerCase() 
    setText(newtext); 
    props.showalert("CONVERTED TO LOWERCASE","success");        


  }
  // const change=()=>{ 
  //   let mybox=document.getElementById('mybox');
  //   mybox.style.backgroundColor='red'; 


  // }
  const reverse=()=>{
      
       let ch='';  
       for (let index = text.length-1; index>=0; index--) {   
        ch+=text[index];
        
       }
      setText(ch); 
     
  }
  const clear=()=>{
   setText('');  
  
  
}

    const handlechange=(e)=>{ 
      console.log("onchange");
      setText(e.target.value)  
   } 
   
  
   const[text,setText]=useState('');       
  return (
    <>
    <div className="container"style={{color:props.mode==='light'?'black':'white'}}>     
        <h1>{props.heading}</h1>      
      <div className="mb-3"> 
         
        <textarea
          className="form-control" 
          value={text}  
          id="mybox" 
          style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'grey':'white'}    }   
          onChange={handlechange}   
          rows="12"  
        ></textarea>   
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>  
      <button className="btn btn-primary mx-2" onClick={handlelowClick}>CONVERT To LOWERCASE</button>    
      {/* <button className="btn btn-primary mx-2" onClick={change}>CHANGE BG</button>      */}  
      <button className="btn btn-primary mx-2" onClick={reverse}>REVERSE</button>      
      <button className="btn btn-primary mx-2" onClick={clear}>CLEAR</button>       
    </div> 
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>  
      <h2>Your text summary</h2> 
      <p>{ text.split(' ').length-1} words {text.length} characters</p>    
      <p>{text.length>0?0.008*text.split(" ").length:'0'} minutes will take to read entire stuff</p>  
      <h2>preview</h2>   
      <p>{text.length>0?text:'enter text to preview'}</p>   
    </div>
    </> 
  );
}
