import React from 'react';
import TimeInput from './TimeInput';
import { testContext } from './testcontext';
var interval;
var isInvertal = true;
class Timer extends React.Component{
    constructor(){
      super();
      this.state = {
        second : 0,
        minute : 0,
        hour : 0
      }
    }

    static contextType = testContext ;


    startTime = ()=>{
      if (isInvertal){
        interval = setInterval(()=>{
          this.setState({
            second : this.state.second + 1
          })
          if (this.state.second >= 59 ){
            this.setState({
              second : 0,
              minute : this.state.minute + 1
            })
          }
          if (this.state.minute >= 59){
            this.setState({
              minute : 0,
              hour : this.state.hour + 1
            })
          }
        } , 1000) ;
        isInvertal = false
      }
      
    }
    stopTime = ()=>{
      if(!isInvertal){
        clearInterval(interval)
        isInvertal = true
      }
    }
    resetTime = ()=>{
      this.setState({
        second : 0,
        minute : 0 ,
        hour : 0
      })
      clearInterval(interval)
      isInvertal = true
    }
    
    handleSaveTime = ()=>{
      // let h = this.state.hour;
      // let m = this.state.minute;
      // let s = this.state.second;
      if(!isInvertal){
        // let newTime = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`
        const newTime = document.querySelector(".timer").innerHTML
      this.context.setTimeArr([...this.context.timeArr , newTime])
      }
    }










    render(){
      let h = this.state.hour;
      let m = this.state.minute;
      let s = this.state.second;
      return(
        <>
        <h2 className='timer' onClick={this.handleSaveTime}>
          {`${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`}
        </h2>
        <TimeInput start = {this.startTime} stop = {this.stopTime} reset = {this.resetTime}/>
        </>
      )
    }
  
  }

export default Timer ;