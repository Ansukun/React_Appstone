import React, { Component } from 'react'
import "./login.css";
import Alert from '@material-ui/lab/Alert';
import PasswordField from 'material-ui-password-field'
import {IconButton,CloseIcon,LockIcon,LockOpenIcon} from "@material-ui/icons" 
import { Grid,Button,Avatar,Dialog,DialogContent,TextField,Card, CardContent ,Snackbar, SnackbarContent,Typography,AssignmentIcon} from "@material-ui/core";
export default class Login extends Component {

constructor(props){
    super(props);
    this.state = {
        email : "",
        password : "",
        snackbarmessage: '',
            snackbaropen: false,
            login: false }

       


}
handleClick = () => {
    fetch('https://reqres.in/api/users?pages=5')
        .then((res) => (res.json()))
        .then((data) => {
            console.log(data);
        })
    
}


   handleLogin = () =>{
    fetch("https://reqres.in/api/register", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
             email: this.state.email,
             password : this.state.password
        })
        
      })
      .then(res => res.json())
      .then(resJson => {
          if (resJson.id){
              console.log(resJson)
              console.log(resJson.id)
              this.setState({
                  message : "User Created",
                  snackbarmessage: "Logged in Succesfully",
                        login: true,
                        snackbaropen: true,
                        email : "",
                        password : ""
               
              })
          }
          else{
              this.setState({
                  message : "User not Created",
                  snackbarmessage: "Login Failed",
                        login: true,
                        snackbaropen: true,
                        email : "",
                        password : ""
              })
          }
      })
    }

    handleEmail =(e) =>{
        this.setState({
            email: e.target.value
        })
       }      
       handlePassword =(e) =>{
        this.setState({
            password : e.target.value
        })
       }      
       
    
   
     
    render() {
        return (
            <Grid Container
            style = {{
                justifyContent : "center",
                marginTop : 100,
                marginLeft: 250
                
            }}
              
              xs = {4}
              sm ={12}
              md = {6}>
                  
                <Card>
                    <CardContent>
            <Grid item>
            <Typography variant="h3" gutterBottom
            style = {{
                color : "Red",
                justifyContent: "center",
                textAlign : "center"
            }}>
                 Login
                  </Typography>


            </Grid>
             <Grid item>
                 <TextField
                 label = "Email"
                 fullWidth
                 id="outlined-basic"
                //  variant="outlined"
                 value = {this.state.email}
                 style = {{
                    marginTop :20}}
                 onChange = {this.handleEmail}/>
             </Grid>
             <Grid item>
             <PasswordField
                hintText="At least 8 characters"
                floatingLabelText="Enter your password"
                errorText="Your password is too short"
                 variant="outlined"
                value = {this.state.password}
                
             style = {{
            marginTop :20}}
            onChange = {this.handlePassword}
            fullWidth
               />
             </Grid>
             <Grid item>
                 <Button
                 onClick = {this.handleLogin}
                 fullWidth
                 disabled={this.state.password.length === 0 || this.state.email.length === 0 ? true : false}
                 variant = "contained"
                 color = "secondary"
                 style = {{
                     marginTop :30}}
                     >
                         LOGIN
                 </Button>
             </Grid>
             </CardContent>
             </Card>
                    <Snackbar
                 open={this.state.snackbaropen}
                autoHideDuration={6000}
                onClose={this.handleClose}
                anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
              >
                {this.state.snackbarmessage === "Login Failed" ? (
                  <Alert onClose={this.handleClose} severity="error">
                    {this.state.snackbarmessage}
                  </Alert>
                ) : (
                  <Alert onClose={this.handleClose} severity="success">
                   {this.state.snackbarmessage}
                  </Alert>
                )}
              </Snackbar>
    

                   
            </Grid>
        )
    }
}
