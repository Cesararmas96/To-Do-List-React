import React from "react";
import "./styles/TaskForm.css";

const TaskNew = (props) => (
	<div className="card text-left cardForm">
		<form id="course" className="card-body" onSubmit={props.onSubmit}>
			<div className="form-group">
				<label> Title</label>

				<input
					type="text"
					name="title"
					onChange={props.onChange}
					className="form-control"
					placeholder="Title"
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
					onChange={props.onChange}
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
					onChange={props.onChange}
					rows="2"
				/>
			</div>
			<div className="form-group">
				<label> Priority</label>

				<select
					className="form-control"
					name="priority"
					onChange={props.onChange}
					required
				>
					<option value="">Priority</option>
					<option>Low</option>
					<option>Medium</option>
					<option>High</option>
				</select>
			</div>
			<input type="submit" className="btn btn-primary btn-block" value="Save" />
		</form>
	</div>
);

export default TaskNew;
