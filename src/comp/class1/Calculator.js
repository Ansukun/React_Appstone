import React from 'react';
import "../class1/style.css"
// import UserInput from "./userinput.js"
export default class Calculator extends React.Component{
    constructor(props){
        super(props);

        this.state={
            // num1:'',
            // num2:'',
            sum:0,
            div:0,
            sub:0,
            mult:0,
            
        }
    }

    // handleNum1 = (e) => {
    //     this.setState({
    //         num1:e.target.value
    //     })
    // }

    // handleNum2 = (e) => {
    //     this.setState({
    //         num2:e.target.value
    //     })
    // }

    handleSum = () =>{
        this.setState({
            sum: alert(parseInt(this.props.val1) + parseInt(this.props.val2)) 
           
        })

    }


    handleSub = () =>{
        this.setState({
            sub: alert(parseInt(this.props.val1) - parseInt(this.props.val2)) 
        })

    }

    handleMul = () =>{
        this.setState({
            mult: alert( parseInt(this.props.val1) * parseInt(this.props.val2))
        })

    }

    handleDiv = () =>{
        this.setState({
            div: alert(parseInt(this.props.val1) / parseInt(this.props.val2))
        })

    }

    handleClc = () =>{
        this.setState({
            num1:'',
            num2:'',
            sum:0,
            div:0,
            sub:0,
            mult:0

        })

    }
  







    render(){
        return(
            
            <div  >
                 
                  {/* <div  className ="input-data">
                   <div className ="first-input">
                       <input   placeholder="enter a first  number" value={this.state.num1}onChange={this.handleNum1}/>
                       </div>
                   
                    <input
                     placeholder="enter a second  number"value={this.state.num2}onChange={this.handleNum2}/>
                   
                    
                  </div> */}
                 
                 
              
                
               <div className = "button" >
                   <button className ="add-button" onClick={this.handleSum}  >
                      ADD 
                 </button>

                 <button className ="sub-button"onClick={(this.handleSub)}>
                     SUBSTRACT
                 </button> 
                 <button className ="mul-button" onClick={this.handleMul}>
                     MULTIPLY
                 </button>
                 <button className ="div-button" onClick={this.handleDiv}>
                      DIVIDE
                 </button>

                 <button className ="clc-button" onClick={this.handleClc}>
                      CLEAR
                 </button> 
                </div>
            <div>
               
            </div>

                            
            </div>
        )
    }
}