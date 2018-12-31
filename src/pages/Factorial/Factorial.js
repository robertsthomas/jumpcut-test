import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { factorialSeq } from "../../functions";

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

class Factorial extends Component {

  state = {
    number: 5,
    result: null
  }

  // Run the 'generator' and set rusult to state
  run = (gen) => {
    let result = gen.next().value
    console.log(gen.next())

    this.setState({ result })
  }

  // Set 'result' to 0 and set new number to state
  onNumberChange = (e) => {
    let number = e.target.value
    this.setState(() => ({
      number,
      result: ''
    }))
  }

  render() {
    const { classes } = this.props
    const gen = factorialSeq(this.state.number) //Use users input number for function
    return (
      <div>
        <Typography
          style={{ color: '#627c85' }}
          variant='h3'
          gutterBottom
        >
          Welcome to Factorial!</Typography>
        <TextField
          id="outlined-number"
          label="Enter A Number"
          defaultValue={this.state.number}
          onChange={this.onNumberChange}
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="filled"
          style={{ marginRight: 20 }}
        />

        <Button
          className={classes.button}
          size='large'
          variant='contained'
          onClick={() => this.run(gen)}
        >
          Run
        </Button>

        {this.state.result &&
          <Typography
            variant='h3'
            style={{ color: '#a2e8dd', fontWeight: 900 }}
          >
            {`${this.state.number}! = ${this.state.result}`}
          </Typography>
        }
      </div>
    )
  }
}

Factorial.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Factorial)