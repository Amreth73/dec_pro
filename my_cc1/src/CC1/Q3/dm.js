import React from 'react'

export default function Fun(props) {
    // state.first={name:""}
    function handle()
    {
        if(document.getElementById("btn").style.color=="black")
        {
            {document.getElementById("whole").style.color="black"}
            {document.getElementById("btn").style.color="white"}
            {document.getElementById("btn").parentNode.style.backgroundColor="black"}
            {document.getElementById("btn").style.backgroundColor="blue"}
        //    { props.name="Light Theme"}
        {document.getElementById("h1").innerText="Dark Mode"}
        {document.getElementById("h1").style.color="white"}
        
        
        
    }
    else
    {
        {document.getElementById("whole").style.color="white"}
        {document.getElementById("btn").style.color="black"}
        {document.getElementById("btn").style.backgroundColor="purple"}
        {document.getElementById("btn").parentNode.style.backgroundColor="white"}
        {document.getElementById("h1").innerText="Light Mode"}
        {document.getElementById("h1").style.color="black"}
            // {document.getElementsByTagName("html").style.color="green"}
            // {props.name="Dark Theme"}
        }
    }
  return (
    <div id="whole" style={{backgroundColor:"white",width:"1000px",height:"1000px",textAlign:"center",border:"1px solid grey"}}>
        <h1 id="h1" style={{color:"black"}}>Light Mode</h1>
        <button onClick={handle} id="btn"style={{color:"black",backgroundColor:"purple",textAlign:"center",padding:"10px"}}>Switch Theme</button>
    </div>
  )
}
