import React, { Component } from 'react'

export default class MountingPhase extends Component {
   state={color:"iamNeo"}
//    shouldComponentUpdate(){
//         return false;
//    }
componentDidMount()
{
    setTimeout(()=>{this.setState({color:"Welcome to React"})},3000)
}

 
    render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
      </div>
    )
  }
}