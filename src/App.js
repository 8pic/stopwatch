import React from 'react';
import "./style.css"
import Timer from './timer';


class App extends React.Component{
    render(){
      return(
        <div className='main'>
            <Timer/>
        </div>
      )
    }
  }

export default App ;