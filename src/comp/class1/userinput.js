import React from "react"
import "../class1/style.css"
import Calculator from "./Calculator"
export default class UserInput extends React.Component{
    constructor(props){
        super(props);

        this.state={
            num1:"",
            num2:""
           
            
        }
       
    }
    handleNum1 = (e) => {
        this.setState({
            num1:e.target.value
        })
    }

    handleNum2 = (e) => {
        this.setState({
            num2:e.target.value
        })
    }
  render(){
      return(
          <div className = "main-div">
              <span style = {{fontSize :30}} > Calculator</span>
              <div  className ="input-data">
                  <div className ="first-input">
                      <input  placeholder="enter a first  number" value={this.state.num1}onChange={this.handleNum1}/>
                  </div>
                       <input   placeholder="enter a second  number"value={this.state.num2} onChange={this.handleNum2}/>
          
        
                    <Calculator val1 = {this.state.num1} val2 = {this.state.num2}/>
              </div>
          </div>
        
      )
  }
    
}