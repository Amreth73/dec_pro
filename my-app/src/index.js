import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from'./Demo.js';
// const display=<ul type="square">
//   <li>Apple</li>
//   <li>Mango</li>
//   <li>Orange</li>
// </ul>

//styling by CSS
    // const s={color:'grey',backgroundColor:'skyblue',textAlign:'center'}
    // const dis=<h1 style={s}>{x>5?"Hello":"Hi"}</h1>
    // const dis1=<h1 style={{color:'green'}}>{x>5?"Hello":"Hi"}</h1>

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
