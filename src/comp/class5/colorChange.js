import React from "react"
import { Grid, Paper, IconButton, Button, } from '@material-ui/core';

export default class ColorChange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [],
            color: 'black'
        }
    }


    handleClick = () => {
        fetch('http://www.colr.org/json/color/random')
            .then((res) => (res.json()))
            .then((data) => {
                console.log(data);
                console.log(data.new_color);
                this.setState({
                    color: '#' + data.new_color
                })
            })
        
    }

    render() {
        return (
            
                  <div>
                      <Grid style = {{backgroundColor : this.state.color}}>

                      </Grid>
                  </div>
        )
    }
 }