import React, { Component } from 'react'
import "./login.css";
import { Grid,Button,IconButton,CloseIcon,Avatar,Dialog,DialogContent,TextField,Card, CardContent ,Snackbar, SnackbarContent,Typography,AssignmentIcon} from "@material-ui/core";
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
               
              })
          }
          else{
              this.setState({
                  message : "User not Created",
                  snackbarmessage: "Login Failed",
                        login: true,
                        snackbaropen: true,
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
                marginTop : 200,
                marginLeft: 450
                
            }}
              
              xs = {4}>
                  
                <Card>
                    <CardContent>

            
             <Grid item>
                 <TextField
                 label = "Email"
                 fullWidth
                 onChange = {this.handleEmail}/>
             </Grid>
             <Grid item>
             <TextField
          required
          id="filled-required"
          label="Password"
          variant="filled"
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
                     marginTop :10}}
                     >
                         LOGIN
                 </Button>
             </Grid>
             </CardContent>
             </Card>
            
             <Snackbar
                    

                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={this.state.snackbaropen}
                        autoHideDuration={3000}
                        onClose={this.snackbarClose}
                        message={<span style={{textAlign:'center',justifyContent:'center'}}> 
                        {this.state.snackbarmessage}</span>}
                        action={
                            <React.Fragment>
                                <Button size="small" aria-label="close" color="default" onClick={this.snackbarClose}>
                                </Button>
                            </React.Fragment>
                        }
                    />
    

                   
            </Grid>
        )
    }
}
