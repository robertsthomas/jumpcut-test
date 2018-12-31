import React, { Component } from 'react'
import { rangeSeq } from "../../functions";

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import TheModal from '../../components/Modal/Modal'

const styles = theme => ({
  field: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    marginTop: 25
  }
});

class Range extends Component {

  state = {
    start: 1,
    end: 10,
    step: 2,
    results: undefined
  }


  run = (gen) => {
    let results = Object.values(gen.next().value);
    this.setState({results})
  }

  onHandleChange = value => event => {
    this.setState({
      [value]: event.target.value,
    });
  }

  handleClear = () => {
    this.setState(() => ({ results: undefined }))
  }

  render() {
    const { classes } = this.props
    let { start, end, step } = this.state;
    const gen = rangeSeq(start, end, step)
    return (
      <div>

        <Typography
          style={{ color: '#627c85' }}
          variant='h3'

        >
          Welcome to Range!
        </Typography>
        <Typography
          style={{ color: '#627c85' }}
          variant='subtitle2'
          gutterBottom
        >
          Hover over textfields for input instructions.
        </Typography>


        <Tooltip title="Enter Start Number">
          <TextField
            className={classes.field}
            type='text'
            defaultValue={this.state.start}
            onChange={this.onHandleChange('start')}
            margin="normal"
            variant="filled"
          />
        </Tooltip>

        <Tooltip title="Enter End Number">
          <TextField
            className={classes.field}
            type='text'
            defaultValue={this.state.end}
            onChange={this.onHandleChange('end')}
            margin="normal"
            variant="filled"
          />
        </Tooltip>

        <Tooltip title='Enter Step Value'>
          <TextField
            className={classes.field}
            type='text'
            defaultValue={this.state.step}
            onChange={this.onHandleChange('step')}
            margin="normal"
            variant="filled"
          />
        </Tooltip>
        <Button
          className={classes.button}
          size='large'
          variant='contained'
          onClick={() => this.run(gen)}
        >
          Run
          </Button>
        <br />

        {/* Results Modal */}
        <TheModal
          results={this.state.results}
          handleClear={this.handleClear}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Range)