import { Grid, Paper, Button, } from '@material-ui/core';
import React from 'react';

export default class Fetcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [],
            color1: '#e6e0c4',
            color2: '#740E93',
            color3: '#4C409C',
            color4: '#CACA29'

        }
    }


    handleClick1 = () => {
        fetch('http://www.colr.org/json/color/random')
            .then((res) => (res.json()))
            .then((data) => {
                console.log(data);
                console.log(data.new_color);
                this.setState({
                    color1: '#' + data.new_color
                })
            })
        
    }

    handleClick2 = () => {
        fetch('http://www.colr.org/json/color/random')
            .then((res) => (res.json()))
            .then((data) => {
                console.log(data);
                console.log(data.new_color);
                this.setState({
                    color2: '#' + data.new_color
                })
            })
        
    }

    handleClick3 = () => {
        fetch('http://www.colr.org/json/color/random')
            .then((res) => (res.json()))
            .then((data) => {
                console.log(data);
                console.log(data.new_color);
                this.setState({
                    color3: '#' + data.new_color
                })
            })
        
    }

    handleClick4 = () => {
        fetch('http://www.colr.org/json/color/random')
            .then((res) => (res.json()))
            .then((data) => {
                console.log(data);
                console.log(data.new_color);
                this.setState({
                    color4: '#' + data.new_color
                })
            })
        
    }




    render() {
        return (
            <Paper elevation={3} style={{ margin: 'auto', alignItems: 'center' }}>
                <Grid container >
                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color1, height: 100, marginRight: 40,marginLeft:80, marginBottom: 20 }}>
                        <Button onClick={this.handleClick1}>
                            add_circle
                        </Button>

                    </Grid>
                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color2, height: 100 }}>
                        <Button onClick={this.handleClick2}>
                            color
                        </Button>

                    </Grid>
                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color3, height: 100, marginRight: 40,marginLeft:80 }}>
                        <Button onClick={this.handleClick3}>
                           add_circle
                        </Button>

                    </Grid>

                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color4, height: 100 }}>
                        <Button onClick={this.handleClick4}>
                           add_circle
                        </Button>

                    </Grid>

                </Grid>
                {console.log(this.state.color)}
            </Paper>
        )
    }
}