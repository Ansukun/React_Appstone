import React from "react"
import {Button, Grid} from "@material-ui/core"

export default class ColorChange extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quote : "",
            author : ""
        }
        
   
    }

    
    handleClick = () => {
        fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
            .then((res) => (res.json()))
            .then((data) => {
            
                this.setState({
                    quote: data.quoteText,
                    author : data.quoteAuthor

                })
            })
        
    }


    render(){
        return(
            <div>

                <Grid>
                     {this.state.quote}
                     {this.state.author}
                     <Button onClick = {this.handleClick}> </Button>
                </Grid>

            </div>

        )
            
        
    }
    
}