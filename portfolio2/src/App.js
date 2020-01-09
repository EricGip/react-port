import React, { Component } from "react";

import {
  createMuiTheme,
  withStyles,
  MuiThemeProvider
} from "@material-ui/core/styles";

import teal from "@material-ui/core/colors/teal";
import pink from "@material-ui/core/colors/pink";

import hacker from "./images/hacker.gif";
import moonlightwave from "./images/moonlightwave.gif";

import Display from "./Display";
import { Hidden } from "@material-ui/core";

const backgrounds = [
  './images/hacker.gif',
  './images/moonlightwave.gif'
];

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink
  },

  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  background: {
    minHeight: `100vh`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
});

const initialState = {
  background: backgrounds[0]
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  render() {
    const { classes } = this.props;
    const { background } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Hidden only="xs">
          <div className={classes.background} style={{ backgroundImage: `url(${background})` }}>
            <Display></Display>
          </div>
        </Hidden>

        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          <Display></Display>
        </Hidden>

      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
