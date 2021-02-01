import React, { Component } from 'react'
import {Button,Grid,Card} from "@material-ui/core"
export default class colorChange extends Component {



    constructor(props){
        super(props);
        this.state = {
            color : [],
            bgColor : ""        }
    }

  

      handleClick = () =>  {
        fetch("http://www.colr.org/json/color/random")
        .then((res) => (res.json()))
        .then((data) =>{
            console.log(data)
            console.log(data.new_color)
            this.setState({
                color:data.new_color
             })
            
        })
 


        
    }

    
    

    render() {
        return (
            <div>
                <Grid>
                    <Button   onClick = {this.handleClick}>
                           Change Color
                    </Button>
                    
                </Grid>
                {console.log(this.state.color)}
            </div>
        )
    }
}
