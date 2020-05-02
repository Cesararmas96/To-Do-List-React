import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import Navigation from "./Navigation";

import "./styles/TaskDetails.css";
function TaskDetails(props) {
	if (props.modalIsOpen === true) {
		return (
			<SweetAlert
				warning
				showCancel
				confirmBtnText="Yes, delete it!"
				confirmBtnBsStyle="danger"
				title="Are you sure?"
				onConfirm={props.onConfirm}
				onCancel={props.onCancel}
			>
				You will not be able to recover this imaginary file!
			</SweetAlert>
		);
	} else {
		const task = props.task;
		console.log(task);
		return (
			<div className="App">
				<Navigation title="Task" />

				<div className="col-md-4">
					<div className="card mt-4">
						<div className="card-header">
							<h3>
								<input type="text" value={task.title} />
							</h3>

							{task.priority === "Low" && (
								<span className="badge badge-pill badge-success ml-2">
									{task.priority}
								</span>
							)}

							{task.priority === "Medium" && (
								<span className="badge badge-pill badge-warning ml-2 text-white">
									{task.priority}
								</span>
							)}

							{task.priority === "High" && (
								<span className="badge badge-pill badge-danger ml-2">
									{task.priority}
								</span>
							)}
						</div>
						<div className="card-body">
							<p>{task.description}</p>
							<p>
								<mark>{task.responsible}</mark>
							</p>
						</div>
						<div className="card-footer">
							<button className="btn btn-danger mr-2" onClick={props.openModal}>
								Delete
							</button>

							<button className="btn btn-success" onClick={props.openModal}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TaskDetails;
