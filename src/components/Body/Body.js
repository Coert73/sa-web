import React, { Component } from "react";
import {
	Switch,
	Route
} from "react-router-dom";
import { BOOK_APPOINTMENT, Confirm, LANDING } from "constants/routes";
import BookAppointment from "views/BookAppointment/BookAppointment";
import Landing from "views/Landing/Landing";
import "./Body.css";
import Confirmation from "views/Confirmation";

export default class Body extends Component {

	render() {
		return (
			<div className="body col flex-grow">
				<Switch>
					<Route path={BOOK_APPOINTMENT}>
						<BookAppointment />
					</Route>
					<Route path={LANDING}>
						<Landing />
					</Route>
					<Route path={Confirm}>
						<Confirmation />
					</Route>
				</Switch>
			</div>
		);
	}
}
