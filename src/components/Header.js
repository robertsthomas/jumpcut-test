import React, { Component } from 'react'
import { Link } from "react-router-dom";

// Material UI
import { withStyles } from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({

});


class Header extends Component {
  render() {
    const { classes, location } = this.props
    console.log(location)
    return (
      <AppBar position='static'>
        <Toolbar style={{ background: '#627c85' }}>
          {location.pathname != '/' &&
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
            <IconButton color="inherit" aria-label="Back">
              <Icon fontSize='large'>chevron_left</Icon>
            </IconButton>
            </Link>
          }
          <Typography variant="h3" style={{ color: '#a2e8dd', marginRight: 'auto' }}>
            Jumpcut Test
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header)