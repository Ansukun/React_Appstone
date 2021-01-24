import React from 'react';
import { Button,TextField } from "@material-ui/core";
export default class Todolist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasksArr: [ "Create a react App"],
            taskInput: "",
            tasksCompleted: ["Done with deployement of the reatc  app"]

        }
    }
    handleInput = (e) => {
        this.setState({
            taskInput: e.target.value
        })
    }
    pushTask = () => {
        var temp = this.state.tasksArr;
        temp.push(this.state.taskInput)
        this.setState({
            tasksArr: temp,
            taskInput: ""
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

    handleEnter = (e) => {
        var code = e.keyCode || e.which;
        if (code === 13) {
            this.pushTask()

        }

    }


    render() {
        return (
            <div style={{
              padding: 50,
              borderRadius: 10,
              justifyContent: "center",
              marginLeft : 400 ,
              height:400,
              width : 400,
              
              
           
          }} >
      
                <h1>To Do lists</h1>
                <TextField
            id="standard-basic"
            label="Task"
            onChange={this.handleChange}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handlePush}
            style={{
                margin: 20,
                justifyContent: "center"
            }}
            
            
          >
            Add
          </Button>

                {this.state.tasksArr.length === 0 ?
                    <h2>You have No tasks to do</h2> :
                    <h2>Tasks to do</h2>}
                <div style={{
                    backgroundColor: "#f2f2f2",
                    padding: 20,
                    borderRadius: 10,
                    width: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    display: 'flexbox',
                    color: 'blueviolet',
                    fontfamily:  "cursive",


                }}>
                    <ul style={{
                        padding: 20,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        display: 'flexbox'
                    }}>
                        {this.state.tasksArr.map((single, index) => {
                            return (
                                <li>
                                    {single}<br /><Button color="primary" variant="contained" onClick={(e) => {
                                        this.handleComplete(e, index, single)
                                    }}>Completed</Button>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {this.state.tasksCompleted.length === 0 ?
                    <h2>Please Complete The Task With Due Time</h2> :
                    <h2>Tasks Completed</h2>}
                <div style={{
                    backgroundColor: "#f2f2f2",
                    padding: 20,
                    borderRadius: 10,
                    width: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    display: 'flexbox'
                }}>
                    <ul style={{
                        padding: 20,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        display: 'flexbox'
                    }}>
                        {this.state.tasksCompleted.map((single, index) => {
                            return (
                                <li>
                                    {single}<br /><Button color="primary" variant="contained" onClick={(e) => {
                                        this.handleUndo(e, index)
                                    }}>Undo</Button>
                                </li>
                            )
                        })}
                    </ul>
                </div>


            </div>
        )
    }
}