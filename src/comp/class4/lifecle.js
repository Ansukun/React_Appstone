import React from "react";
import "../class1/style.css"


export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    }
  }
 
  

  componentDidUpdate() {
      if(this.state.value !== this.props.value){
        this.setState({
          value : this.props.value
        })
      }
  }

  
  render() {
    return (
      <div className = "main-div">
       
<div className = "button">
{ this.props.value}
</div>
   
      </div>
    );
  }
}