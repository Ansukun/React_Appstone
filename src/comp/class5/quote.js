import { Grid, Card, IconButton, Button, Typography } from '@material-ui/core';
import React from 'react';
import "./quotestyle.css"
export default class Fetcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
            proxyUrl: 'https://whispering-tor-04671.herokuapp.com/',
            apiUrl: 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json',
            thought: "Your body is precious. It is our vehicle for awakening. Treat it with care.",
            author: '',
            

        }
    }

  
    handleClick = () => {
        fetch(this.state.proxyUrl + this.state.apiUrl)
                                .then(res => res.json()).
                                then((data) => {
                                    console.log(data);
                                    console.log(data.quoteText)
                                    this.setState({
                                        thought: '"' + data.quoteText + '"',
                                        author: data.quoteAuthor

                })
            })
        
    }

    
   render() {
       return (
           <div className = "main">
               <Grid
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
                 xs = {12}
              >
                   <div className = "box">
                   <Card>
                      <div className = "thought">
                      <Typography variant="h3" gutterBottom>
                  {this.state.thought}<br/>
                  </Typography>

                      </div>
                  <div className = "author">
                  <Typography  gutterBottom>
                  {this.state.author}<br/>
                  </Typography>
               
                  </div>
                 
                  </Card>
                   </div>
                  
              
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs = {12} > 

                  <div style = {{
                      marginTop : 20
                  }}>
                  <Button variant="contained" color="secondary" onClick = {this.handleClick}>
                   Thoughts
                  </Button>
                  </div>
                 
     </Grid>
               
                 
               </Grid>
    
              
           </div>
       )
   }
}