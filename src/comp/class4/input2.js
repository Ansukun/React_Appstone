import React, { Component } from 'react'
import lifecle from "./lifecle.js"
export default class Input2 extends Component {

    constructor(props){
        super(props);

        this.state={
            value:"",
            
           
            
        }
       
    }

    
    handleValue= (e) => {
        this.setState({
            Value:e.target.value
        })
    }

    render() {
        return (
            <div>
              
              <span style = {{fontSize :30}} > Car list</span>
        <label for="cars">Choose a car:</label>

<select onChange = {this.handleChange}  value ={this.state.value}name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

<lifecle value = {this.state.value}/>  
            </div>
        )
    }
}
