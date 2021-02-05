import React from "react";
import { Grid,Typography,List,Card, Avatar, ListItem, ListItemAvatar, ListItemText, CircularProgress, Dialog, DialogContent} from "@material-ui/core";
export default class Delay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?delay=3").then((res) => {
      res.json().then((Data) => {
        console.log(Data.data);
        this.setState({ 
            users: Data.data ,
            
        });
      });
    });
  }

  render() {
    return (
     
        
          <Grid container xs={11}>
            <Grid item xs={12}
            style = {{
                marginTop : 250
            }}>
              <Typography align="center" color="white" variant="h3">
                USER DATA
              </Typography>
            </Grid>

            <Grid item container 
            justify="center"
             xs={12}
             alignItems = "center" 
            style = {{
                marginLeft : 50,
                marginTop : 80
            }}
             >
                
              {this.state.users ? (
                this.state.users.map((item, i) => (
                  <Card
                  style = {{
                      marginTop : 20,
                      margin : 20

                  }}>
                    <List>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar src={item.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                              >
                                {item.first_name} {item.last_name}
                              </Typography>
                            </React.Fragment>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                              >
                                {item.email}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </Card>
                ))
              ) : (
                <Dialog open = "true">
                <DialogContent>
                    <CircularProgress/>
                </DialogContent>
            </Dialog>
              )}
            </Grid>
          </Grid>
        
    );
  }
}