import React from "react";
// import "../styles/styles2.css";
import Button  from  "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
export default class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: "",
      task: [
        {
          job: " Ansumun ",
        },
      ],
      task2: [
        {
          job1: " Ansumun ",
        },
      ],
      item: "",
    };
  }

  handleInput1 = (e) => {
    this.setState({
      job: e.target.value,
    });
  };

  handlePush = () => {
    var temp = this.state.task;
    temp.push({
      job: this.state.job,
    });
    this.setState({
      task: temp,
    });
  };

  handleDelete = (e, index) => {
    var temp = this.state.task;
    var ele = temp.splice(index, 1);
    console.log(ele[0].job);
    var temp2 = this.state.task2;
    temp2.push({
      job1: ele[0].job,
    });
    this.setState({
      task2: temp2,
    });

    this.setState({
      task: temp,
    });
  };

  render() {
    return (
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
        {this.state.task.map((single, index) => {
          return (
            <div >
              {single.job}{" "}
              <Button
                
                onClick={(e) => {
                  this.handleDelete(e, index);
                }}
              >
                -
              </Button>
            </div>
          );
        })}
        <div>
          {this.state.item}
          <div >
            <input
              placeholder="Enter The name"
              
              value={this.state.name}
              onChange={this.handleInput1}
            />
            <Button
              
              disabled={this.state.job === "" ? true : false}
              onClick={this.handlePush}
            >
              ADD
            </Button>
          </div>
        </div>
        <div>
          {this.state.task2.map((single, index) => {
            return <div >{single.job1} </div>;
          })}
        </div>
       
      </Grid>
    );
  }
}