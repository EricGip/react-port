import React, { Component } from "react";
import {
  withStyles,

  DialogContentText,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import GitHubIcon from '@material-ui/icons/GitHub';

import ToolTip from "@material-ui/core/ToolTip";
const styles = theme => {};

class ProjectTab extends Component {
  render() {

    return (
      <div>
        <DialogContentText>
            I majored in Statistics for Machine Learning because of the impact I could make. 
            To manage the large datasets required for data science, I learned about data lakes in the cloud and found interest in DevOps & AWS certifications. 
            After an IT position, I realized building would create more impact than analyzing at my current age.
            With some guidance from my fraternity's alumni, I learned that I wasn't far off from a Software Engineer. 
        </DialogContentText>

        <DialogContentText>
            I am currently seeking to begin my Software Engineering career so I will be trying to showcase generalist projects to show that I understand the whole picture and have no problem learning new technology. 
            <br></br>
            Other projects will be on my GitHub or covered in future blog posts.
        </DialogContentText>

        <List>
          <ListItem>
            <ListItemText primary="This site" 
            secondary="Created with React & Material-UI. From this simple front-end site, I learned much more about how the internet works, DOM, and MVT/MVC templates." 
             />
                <ListItemSecondaryAction>
                    <ToolTip>
                        <IconButton aria-label="hello" edge="end">
                            <GitHubIcon />
                        </IconButton>
                    </ToolTip>
                </ListItemSecondaryAction>
          </ListItem>
        </List>
        
        <List>
          <ListItem>
            <ListItemText primary="Raspberry Pi Kubernetes Cluster" 
            secondary="I've always been interested in hardware and RPI's seemed like a good introduction. Master with 3 slave nodes to easily manage docker images. Check out how I found out my housemates and I have been DDoSing ourselves for a whole year with our own IoT devices with a quick Docker pull." 
             />
                <ListItemSecondaryAction>
                    <ToolTip title="Links PiHole project">
                        <IconButton aria-label="hello" edge="end">
                            <GitHubIcon />
                        </IconButton>
                    </ToolTip>
                </ListItemSecondaryAction>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary="VR Webpage/Gallery" 
            secondary="My girlfriend runs a small GameCube designing business and the main clientelle is from comissions. By creating an interactive and immersive gallery of her previous work, we were able to catch the attention of gamers and gain more commmissions." 
             />
                <ListItemSecondaryAction>
                    <ToolTip title="Links to GitHub where there is a Demo">
                        <IconButton aria-label="hello" edge="end">
                            <GitHubIcon />
                        </IconButton>
                    </ToolTip>
                </ListItemSecondaryAction>
          </ListItem>
        </List>


        <List>
          <ListItem>
            <ListItemText primary="HackerOne, Bug Bounty" 
            secondary="I feel like this job was made for me given my freelancing experience with ELO Boosting and my previous Info Security, Risk Analyst position. After working with JS, HTML, and CSS, I combined my coding knowledge with BURP Suite, launched my first XSS attack, and fell in love with Offensive Sec. While I am still very new, I am currently studying hard in hopes of my first big bounty." 
             />
                <ListItemSecondaryAction>
                    <ToolTip>
                        <IconButton aria-label="hello" edge="end">
                            <GitHubIcon />
                        </IconButton>
                    </ToolTip>
                </ListItemSecondaryAction>
          </ListItem>
        </List>

      </div>
    );
  }
}

export default withStyles(styles)(ProjectTab);
