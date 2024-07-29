import React from 'react';
import "./style.css"

class TimeInput extends React.Component{

    render(){
        return(
         <div className='input-container'> 
         <div className='btn-container'>
        <button className='submit-time' onClick={this.props.start}>start</button>
        <button className='submit-time' onClick={this.props.stop}>stop</button>
        <button className='submit-time' onClick={this.props.reset}>reset</button>
        </div>
        </div>  
        )
    }
}

export default TimeInput;