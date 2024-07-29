import React from 'react';

class Hello extends React.Component{
    render(){
        return(
            <h1 className='hello'>{this.props.title}</h1>
        )
    }
}
export default Hello; 