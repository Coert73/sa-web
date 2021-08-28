import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Box, Button, Typography } from "@material-ui/core";
import { BOOK_APPOINTMENT } from "constants/routes";
import "./Landing.css";

class Landing extends Component {

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};
	
	handleBookAppointmentClick() {
		this.props.history.push(BOOK_APPOINTMENT);
	}
	

	render() {
		return (
			<div className="landing col flex-grow">
				<Box className="top" display="flex" flexWrap="nowrap" flex={2} flexDirection="row" alignItems="center" justifyContent="center">
					<Button className="top-button" variant="contained" size="large" color="primary" onClick={()=>this.handleBookAppointmentClick()}>{"BOOK APPOINTMENT"}</Button>
				</Box>
				<Box className="bottom" display="flex" flexWrap="nowrap" flex={1} flexDirection="column" px={11} justifyContent="center">
					<Typography m={1} variant="h3" component="h3">
						{"Welcome to"}
					</Typography>
					<Typography variant="h4" component="h3">
						{"West side veterinary centre"}
					</Typography>
					<Box className="bottom-container" display="flex" flexDirection="column">
						<Typography variant="body1" component="h3">
							{"We are located at :"}
						</Typography>
						<Typography variant="body2" component="h3">
							{"Valley Farm Animal Hospital, 829 Old Farm Rd, Faerie Glen, Pretoria, 0043"}
						</Typography>
					</Box>
					<Box className="bottom-container" display="flex" flexDirection="column">
						<Typography variant="body1" component="h3">
							{"Call us at:"}
						</Typography>
						<Typography variant="body2" component="h3">
							{"098 1234 890"}
						</Typography>
					</Box>
				</Box>
			</div>
		);
	}
}

export default withRouter(Landing);
