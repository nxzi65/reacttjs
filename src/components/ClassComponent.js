import React, { Component } from 'react'

 class ClassComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              counter:0
         }
     }
     
     incrementOne = () =>{
         this.setState({
             counter:this.state.counter+1
         }
         )
     }
     
    render() {
        return (
            <React.Fragment>
                <h1>Your passed property value{this.props.myname}</h1>
                <h2>Counter value is {this.state.counter}</h2>
                <button onClick={()=> this.incrementOne()} type="button">Increment counter</button>
            </React.Fragment>
        )
    }
}

export default ClassComponent
