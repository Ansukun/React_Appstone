import React from 'react';
import "../class1/style.css"
export default class Calculator extends React.Component{
    constructor(props){
        super(props);

        this.state={
            num1:'',
            num2:'',
            sum: "",
            aveg :"",
            
            
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

    handleSum = () =>{
        this.setState({
            sum: parseInt(this.state.num1) + parseInt(this.state.num2)
           
        },() => {
            
            this.setState({
                aveg : (this.state.sum)/2
            })
        }
        )

    }
    handleaveg = () =>{
        alert(this.state.aveg)
    }


   

    handleClc = () =>{
        this.setState({
            num1:'',
            num2:'',
            sum : '',
           aveg :""

        })

    }
  







    render(){
        return(
            
            <div  className = "main-div" >
                 
                  <div  className ="input-data">
                    <div className ="first-input">
                       <input   placeholder="enter a first  number" value={this.state.num1}onChange={this.handleNum1}/>
                       </div>
                   
                     <input
                      placeholder="enter a second  number"value={this.state.num2}onChange={this.handleNum2}/>
                   
                    
                    </div>
                 
                    
          <div className = 'res'>
              Avereage :  { this.state.aveg} <br/>
        
               Sum  :  {this.state.sum}
               </div>
            
                      
              
                
               <div className = "button" >
                   <button className ="add-button" onClick={this.handleSum}  >
                      ADD 
                 </button>

                

                 <button className ="clc-button" onClick={this.handleClc}>
                      CLEAR
                 </button> 
                </div>
               
           
                                         
            </div>
        )
    }
}