import React from 'react';
import { Button,TextField, Card,Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/Icon';

import "./todolist.css"
export default class Todolist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Arr: [],
            Input: "",
            Completed: []

        }
    }
    handleInput = (e) => {
        this.setState({
            Input: e.target.value
        })
    }
    handlePush = () => {
        var temp = this.state.Arr;
        temp.push(this.state.Input)
        this.setState({
            Arr: temp,
            Input: "",
        })
    }
    handleComplete = (e, index) => {
        var temp = this.state.Arr;
        var ele = temp.splice(index, 1);
        var temp2 = this.state.Completed;
        temp2.push(ele[0])
        console.log(ele[0]);
        this.setState({
            Arr: temp,
            Completed: temp2
        })
    }

    handleUndo = (e, index) => {
        var temp = this.state.Completed;
        var ele = temp.splice(index, 1);
        var temp2 = this.state.Arr;
        temp2.push(ele[0])
        console.log(ele[0]);
        this.setState({
            Arr: temp2,
            Completed: temp
        })
    }


    render() {
        return (
            <div className = "main_index"  >
                 
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                  >
                   
              <TextField
                 id="standard-basic"
                 label="Task"
                 placeholder = "Enter the Task"
                 onChange={this.handleInput}
                 value={this.state.Input}
                />
              <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handlePush}
                  value = {this.state.Input} 
                  disabled = {this.state.Input? false:true}>
                      
                  Add
              </Button>

            
          </Grid> 
         
          
          <div className = "main">
          
                <Card className = "moreinfo">
                <div className = "index">
                {this.state.Arr.length === 0 ?
                    <h2>You have No tasks to do</h2> :
                    <h2>Tasks to do</h2>}
                </div>
                
                    <ul>
                        {this.state.Arr.map((single, index) => {
                            return (
                                <li>
                                    {single}  < Button color="primary" variant="contained" onClick={(e) => {
                                        this.handleComplete(e, index)
                                    }}>Done</Button>
                                </li>
                            )
                        })}
                    </ul>
                </Card>

                
                <Card className = "completed" >
                    <div className = "index">
                    {this.state.Completed.length === 0 ?
                    <h2>No Task Completed</h2> :
                    <h2>Tasks Completed</h2>}
                    </div>
                
                    <ul >
                        {this.state.Completed.map((single, index) => {
                            return (
                                <li>
                                    {single}  < Button color="primary" variant="contained" onClick={(e) => {
                                        this.handleUndo(e, index)
                                    }}>Undo</Button>
                                </li>
                            )
                        })}
                    </ul>
                </Card>
          </div>
                


            </div>
        )
    }
}