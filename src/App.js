import React from 'react';
import "./style.css"
import Timer from './timer';



class App extends React.Component{
    constructor(){
        super()
        this.state = {
            title : "hello"
        }
    }
    handelSetTitle = ()=>{
        this.setState({
            title : "goodbye"
        })
    }
    render(){
      return(
        <div className='main'>
            <Timer handelSetTitle={this.handelSetTitle}/>
        </div>
      )
    }
  }

export default App ;