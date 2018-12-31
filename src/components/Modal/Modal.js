import React from 'react'
import Modal from "react-modal";
import './styles.css'

// Material UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TheModal = (props) => {
	return (
		<Modal
			isOpen={!!props.results}
			onRequestClose={props.handleClear}
			contentLabel='Range Results'
			ariaHideApp={false}
			closeTimeoutMS={200}
			className='modal'
		>
			<Typography variant='h4' style={{color: '#a2e8dd'}} gutterBottom >Range Results</Typography>
			<br/>
			{props.results && <h5 className='modal__body' gutterbottom>{props.results + ', '}</h5>}
			<br />
			<Button variant='outlined' onClick={props.handleClear}>Close</Button>
		</Modal>
	)
}

export default TheModal;