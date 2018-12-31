import React, { Component } from 'react'
import { primes } from "../../functions";

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({

});


class Primes extends Component {

	state = {
		results: []
	}

	run = (gen) => {
		const results = []
		while(gen.next().value){
			results.push(gen.next().value)
		}

		this.setState({
			results
		})

		console.log(this.state)

	}


	render() {
		const { classes } = this.props
		const gen = primes()
		return (
			<div>
				<Typography
					style={{ color: '#627c85' }}
					variant='h3'
				>
					Welcome to Primes!
        </Typography>

				<Typography
					style={{ color: '#627c85' }}
					variant='subtitle2'
					gutterBottom
				>
					Click run for prime numbers from 1 to 100.
        </Typography>
				<Button variant='contained' onClick={() => this.run(gen)}>Run</Button>

				{this.state.results && this.state.results.map((result) => (
					<Typography
					variant='subtitle1'
					style={{ color: '#a2e8dd', fontWeight: 900 }}
				>
				{result}
				</Typography>
				))}
			</div>
		)
	}
}

export default withStyles(styles)(Primes)
