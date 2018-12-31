import React from 'react'
import { Link } from "react-router-dom";

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function Home() {
	return (
		<div>
			<Typography
				style={{ color: '#627c85' }}
				variant='h3'
			>
				Welcome! Click any button below
        </Typography>
				<Typography
				style={{ color: '#627c85' }}
				variant='subtitle1'
				gutterBottom
			>
				warning! these are very advanced computing functions
        </Typography>
			<div>
				<Link to='/factorial'><Button style={{margin: 10}} size='large' variant='contained'>Factorial</Button></Link>
				<br/>
				<Link to='/range'><Button style={{margin: 10}} size='large' variant='contained'>Range</Button></Link>
				<br/>
				<Link to='/primes'><Button style={{margin: 10}} size='large' variant='contained'>Primes</Button></Link>
				<br/>
				<Link to='/fib'><Button style={{margin: 10}} size='large' variant='contained'>Fibonacci</Button></Link>
				<br/>
				</div>
		</div>
	)
}
