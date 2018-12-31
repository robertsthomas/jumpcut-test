import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { fib } from "../../functions";

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: 20
  },
});

class Fibonacci extends Component {

  state = {
    number: 12,
    result: null
  }

  run = (num) => {
    let result = fib(num)
    this.setState({
      result
    })
  }

  onNumberChange = (e) => {
    let number = e.target.value
    this.setState(() => ({
      number,
      result: ''
    }))
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Typography
          style={{ color: '#627c85' }}
          variant='h3'
          gutterBottom
        >
          Welcome to Fibonacci!</Typography>

        <TextField
          id="outlined-number"
          label="Enter A Number"
          defaultValue={this.state.number}
          onChange={this.onNumberChange}
          type="text"
          margin="normal"
          variant="filled"
          style={{ marginRight: 20 }}
        />
        <Button
          className={classes.button}
          size='large'
          variant='contained'
          onClick={() => this.run(this.state.number)}
        >
          Run
        </Button>
        <Typography
        variant='h3'
        style={{ color: '#a2e8dd', fontWeight: 900 }}
        >
        {this.state.result}
        </Typography>
      </div>
    )
  }
}

Fibonacci.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fibonacci)