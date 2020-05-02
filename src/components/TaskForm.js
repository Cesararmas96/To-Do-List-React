import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

import "./styles/TaskForm.css";

class TaskForm extends Component {
	handleClick = (e) => {
		console.log("Button was clicked");
	};

	render() {
		if (this.props.modalIsOpen === true) {
			return (
				<SweetAlert
					warning
					showCancel
					confirmBtnText="Yes, delete it!"
					confirmBtnBsStyle="danger"
					title="Are you sure?"
					onConfirm={this.props.onConfirm}
					onCancel={this.props.onCancel}
				>
					You will not be able to recover this imaginary file!
				</SweetAlert>
			);
		} else {
			return (
				<div className="card text-left w-50  ">
					<form className="card-body" onSubmit={this.props.onSubmit}>
						<div className="form-group">
							<label> Title</label>
							<input
								type="text"
								name="title"
								onChange={this.props.onChange}
								className="form-control"
								placeholder="Title"
								value={this.props.formValues.title}
								required
							/>
						</div>
						<div className="form-group">
							<label> Responsible</label>

							<input
								type="text"
								name="responsible"
								className="form-control"
								placeholder="Responsible"
								onChange={this.props.onChange}
								value={this.props.formValues.responsible}
								required
							/>
						</div>

						<div className="form-group">
							<label> Description</label>

							<textarea
								required
								className="form-control"
								name="description"
								placeholder="Description"
								onChange={this.props.onChange}
								value={this.props.formValues.description}
								rows=""
							></textarea>
						</div>
						<div className="form-group">
							<label> Priority</label>

							<select
								className="form-control"
								name="priority"
								onChange={this.props.onChange}
								value={this.props.formValues.priority}
								required
							>
								<option value="">Priority</option>
								<option>Low</option>
								<option>Medium</option>
								<option>High</option>
							</select>
						</div>
						<div className="text-center">
							<Link to="/" className="btn btn-secondary mr-2">
								Cancel
							</Link>
							<button
								className="btn btn-danger mr-2 "
								onClick={this.props.openModal}
							>
								Delete
							</button>
							<button onClick={this.handleClick} className="btn btn-success ">
								Save
							</button>
						</div>
					</form>
				</div>
			);
		}
	}
}
export default TaskForm;
