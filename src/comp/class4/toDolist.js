import React from 'react';
import { Button,TextField, Card,DeleteIcon } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';
import "./todolist.css"
export default class Todolist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasksArr: [],
            taskInput: "",
            tasksCompleted: []

        }
    }
    handleInput = (e) => {
        this.setState({
            taskInput: e.target.value
        })
    }
    handlePush = () => {
        var temp = this.state.tasksArr;
        temp.push(this.state.taskInput)
        this.setState({
            tasksArr: temp,
            taskInput: "",
        })
    }
    handleComplete = (e, index) => {
        var temp = this.state.tasksArr;
        var ele = temp.splice(index, 1);
        var temp2 = this.state.tasksCompleted;
        temp2.push(ele[0])
        console.log(ele[0]);
        this.setState({
            tasksArr: temp,
            tasksCompleted: temp2
        })
    }

    handleUndo = (e, index) => {
        var temp = this.state.tasksCompleted;
        var ele = temp.splice(index, 1);
        var temp2 = this.state.tasksArr;
        temp2.push(ele[0])
        console.log(ele[0]);
        this.setState({
            tasksArr: temp2,
            tasksCompleted: temp
        })
    }


    render() {
        return (
            <div  >
                <div className = "input">
                <h1>To do list </h1>
            <TextField
            id="standard-basic"
            label="Task"
            placeholder = "Enter the Task"
            onChange={this.handleInput}
            value={this.state.taskInput}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handlePush}
            value = {this.state.taskInput}
            disabled = {this.state.taskInput? false:true}>
            Add
          </Button>
          </div> 
         
          
          <div className = "main">
          
                <Card className = "moreinfo">
                <div className = "index">
                {this.state.tasksArr.length === 0 ?
                    <h2>You have No tasks to do</h2> :
                    <h2>Tasks to do</h2>}
                </div>
                
                    <ul>
                        {this.state.tasksArr.map((single, index) => {
                            return (
                                <li>
                                    {single}<br />< Button color="primary" variant="contained" onClick={(e) => {
                                        this.handleComplete(e, index)
                                    }}>Done</Button>
                                </li>
                            )
                        })}
                    </ul>
                </Card>

                
                <Card className = "completed" >
                    <div className = "index">
                    {this.state.tasksCompleted.length === 0 ?
                    <h2>No Task Completed</h2> :
                    <h2>Tasks Completed</h2>}
                    </div>
                
                    <ul >
                        {this.state.tasksCompleted.map((single, index) => {
                            return (
                                <li>
                                    {single}<br />< Button color="primary" variant="contained" onClick={(e) => {
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