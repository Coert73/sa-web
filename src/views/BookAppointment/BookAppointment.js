import { Box, Typography, Button } from "@material-ui/core";
import { Confirm } from "constants/routes";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./BookAppointment.css";

export class BookAppointment extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};
	handleBookAppointmentClicks() {
		this.props.history.push(Confirm);
	}
	render() {
		return (
			<Box className="book-appointment" display="flex" flexDirection="column" flex="1" alignItems="center" justifyContent="center">
				<Typography m={1} variant="h3" component="h3">
					<h3>Please fill in the following details of the form</h3>
					<p>Name</p>
					<input type="text" name="firstName"/>
					<p>Surame</p>
					<input type="text"  name="lastName"/>
					<p>Cellphone Number</p>
					<input type="text"  name="cellphone"/>
					<p>Email Address</p>
					<input type="email" pattern=".+@globex\.com" size="30" name="email" required></input>
					<p>Type of animal</p>
					<select name="petType" id="animals">
					    <option value="rabbit">Rabbit</option>
						<option value="cat">Cat</option>
						<option value="dog">Dog</option>
						<option value="bird">Bird</option></select>
					<p>ID/Passport Number</p>
					<input type="text"  name="id"/>
					<p>Date and Time Start</p>
					<input type="datetime-local"  name="appointmentStartDate"></input>
					<p>Date and Time End</p>
					<input type="datetime-local"  name="appointmentEndDate"></input>
					<p>Pet Name</p>
					<input type="text"  name="vistReason"/>
					<p>Confirm your work appointment below.</p>
					<Button className="top-button" variant="contained" size="large" color="primary" onClick={()=>this.handleBookAppointmentClicks()}>{"Confirm Appointment"}</Button>
				</Typography>	  
			</Box>
			
		);
	}
}

export default withRouter(BookAppointment);