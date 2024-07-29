import React, { useEffect, useState } from 'react';
import "./style.css"
import Timer from './timer';



// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             title : "hello"
//         }
//     }
//     handelSetTitle = ()=>{
//         this.setState({
//             title : "goodbye"
//         })
//     }
//     render(){
//       return(
//         <div className='main'>
//             <Hello title={this.state.title}/>
//             <Timer handelSetTitle={this.handelSetTitle}/>
//         </div>
//       )
//     }
//   }


const App = ()=>{
  const[isLight , setIsLight] = useState(false)


  useEffect(()=>{
    console.log("test")
  } , [isLight])




  const handelSetIsLight = ()=>{
    setIsLight(!isLight)
  }


  return(
        <div className='main' style={{background:isLight ? "white" : "black"}}>
             <Timer/>
             <button className='submit-time' style={{color : isLight ? "black" : "white" , borderColor: isLight ? "black" : "white" }} onClick={handelSetIsLight}>change</button>
         </div>
  )
}



export default App ;