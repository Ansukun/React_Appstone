import React from "react";
import "../class1/style.css"
import Input2 from "./input2";

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    }
  }
 
  

  componentDidUpdate() {
       <Input2 value = {this.state.value}/>
       alert("State Varialble is Updated")
  }

  handleChange = (e) => {
    this.setState({
      value : e.target.value      
    })
  }

  render() {
    return (
      <div className = "main-div">
       <span style = {{fontSize :30}} > Car list</span>
        <label for="cars">Choose a car:</label>

<select onChange = {this.handleChange}  value ={this.state.value}name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
<div className = "button">
{ this.state.value}
</div>
   
      </div>
    );
  }
}