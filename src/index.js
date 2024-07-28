import React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css"
import App from './app';






// const tick = ()=>{
  createRoot(document.getElementById("root")).render(<App/>)
// }

// setInterval(()=>{
//   tick()
// }, 1000)