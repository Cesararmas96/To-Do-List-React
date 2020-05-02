import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark fixed-top ">
				<Link to="/" className="text-white">
					{this.props.title}
					<span className="badge badge-pill badge-light ml-2">
						{this.props.total}
					</span>
				</Link>
			</nav>
		);
	}
}

export default Navigation;
