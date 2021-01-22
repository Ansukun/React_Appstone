import React, { Component } from 'react'
import lifecle from "./lifecle"
export default class Input2 extends Component {

    constructor(props){
        super(props);

        this.state={
            value:"",
            
           
            
        }
       
    }

    
    // handleValue= (e) => {
    //     this.setState({
    //         Value:e.target.value
    //     })
    // }

    render() {
        return (
            <div>
              
              {this.props.Value}
            </div>
        )
    }
}
