import React, { Component } from "react";
import api from "../api";

import "./styles/Modal.css";

function Modal(props) {
	const task = props.task;
	console.log(task);
	return (
		<div
			className="modal fade"
			id="exampleModal"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Edit Task
						</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div className="modal-body">
						<div className="form-group">
							<span className="modal-label">Title</span>
							<input type="text" value="loco" className="form-control" />
						</div>

						<div className="form-group">
							<span className="modal-label">Responsabilite</span>
							<input type="text" className="form-control" />
						</div>

						<div className="form-group">
							<span className="modal-label">Description</span>
							<textarea className="form-control" name="description"></textarea>
						</div>

						<div className="form-group">
							<span className="modal-label">Priority</span>
							<select className="form-control" name="priority" required>
								<option>Options</option>
								<option>Low</option>
								<option>Medium</option>
								<option>High</option>
							</select>
						</div>
					</div>

					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
						<button
							type="button"
							className="btn btn-primary"
							data-dismiss="modal"
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Modal;
