import React, { Component } from 'react'
import "./login.css";
import { Grid,Button,Dialog,DialogContent,TextField,Card, CardContent ,Snackbar, DialogTitle, DialogContentText, CircularProgress, Typography} from "@material-ui/core";
export default class Login2 extends Component {

constructor(props){
    super(props);
    this.state = {
        name : "",
        email : "",
        message : "" ,
        open : false
         }

       


}

handleName =(e) =>{
    this.setState({
        name : this.state.name
    })
   }      
   handlejob =(e) =>{
    this.setState({
        email : this.state.email
    })
   }      
   

   addUser = () =>{
    fetch('https://reqres.in//api/users?delay=3', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email
        })
        
      })
      .then(res => res.json())
      .then(resJson => {
          if (resJson.id){
              this.setState({
                  message : "User Created",
                  open : true
              })
          }
          else{
              this.setState({
                  message : "User not Created",
                  open : false
              })
          }
      })
    }
   


         
    render() {
        return (
            <Grid Container
            style = {{
                justifyContent : "center",
                marginTop : 200,
                marginLeft: 450
                
               
            }}
            xs = {6}
              >
                  <Typography variant="h3" gutterBottom style = {{
                       justifyContent : "center",
                       marginTop : 20,
                  }}>
                     USER LOGIN
                  </Typography>
                <Card>
                    <CardContent>

            
             <Grid item>
                 <TextField
                 label = "name"
                 fullWidth
                 onChange = {this.handleName}/>
             </Grid>
             <Grid item>
             <TextField
          required
          id="filled-required"
          label="Required"
          variant="filled"
          onChange = {this.handlejob}
          fullWidth
        />
             </Grid>
             <Grid item>
                 <Button
                 onClick = {this.addUser}
                 fullWidth
                 variant = "contained"
                 color = "secondary"
                 style = {{
                     marginTop :10}}
                     disabled = {this.state.name==="" || this.state.email===""? false:true}
                      
                     >
                         ADD USER
                 </Button>
             </Grid>

             </CardContent>
             </Card>
             <Snackbar
        
        message={this.state.message}
      />
      <Dialog open = {this.state.open}>
          <DialogContent>
              <CircularProgress/>
          </DialogContent>
      </Dialog>
            </Grid>
        )
    }
}
