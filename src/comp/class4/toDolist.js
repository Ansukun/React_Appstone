import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import "./todolist.css"
export default class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ["Clean dishes"],
      task1: [],
      item: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleDelete = (e, index) => {
    var temp = this.state.task;
    var ele = temp.splice(index, 1);
    console.log(ele[0]);
    var temp2 = this.state.task1;
    temp2.push(ele[0]);
    this.setState({
      task2: temp2,
      task: temp,
    });
  };
  handlePush = () => {
    var temp = this.state.task;
    temp.push(this.state.item);
    this.setState({
      task: temp,
      item: "",
    });
  };
  render() {
    return (
      <div>
        <Grid classname = "input" container direction="row" justify="center" alignItems="center">
          <TextField
            id="standard-basic"
            label="Enter the task to be done"
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
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
            <Grid>
            {this.state.task.length === 0 ?
                    <h2> Completed</h2> :
                    <h2>Tasks</h2>}
                <div className = "completed">
                    <ul >
                        {this.state.task.map((single, index) => {
                            return (
                                <li>
                                    {single}<br/><Button color="primary" variant="contained" size="small" onClick={(e) => {
                                        this.handleDelete(e, index, single)
                                    }}>Completed</Button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Grid>

                <Grid>
                {this.state.task1.length === 0 ?
                    <h2> Completed</h2> :
                    <h2> task</h2>}
                <div className = "completed">
                    <ul >
                        {this.state.task1.map((single, index) => {
                            return (
                                <li>
                                  <strike>{single}<br/></strike>  
                                </li>
                            )
                        })}
                    </ul>
                </div>
                </Grid>

        </Grid>
      </div>
    );
  }
}