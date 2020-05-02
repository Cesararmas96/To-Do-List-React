import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/TaskList.css";

class TaskListItem extends Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="card mt-4">
					<div className="card-header">
						<h3>{this.props.title}</h3>

						{this.props.priority === "Low" && (
							<span className="badge badge-pill badge-success ml-2">
								{this.props.priority}
							</span>
						)}

						{this.props.priority === "Medium" && (
							<span className="badge badge-pill badge-warning ml-2 text-white">
								{this.props.priority}
							</span>
						)}

						{this.props.priority === "High" && (
							<span className="badge badge-pill badge-danger ml-2">
								{this.props.priority}
							</span>
						)}
					</div>
					<div className="card-body">
						<p>{this.props.description}</p>
						<p>
							<mark>{this.props.responsible}</mark>
						</p>
					</div>
					<div className="card-footer">
						<Link
							className="btn btn-primary "
							to={`/todos/${this.props.id}/edit`}
						>
							Edit
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

const TaskList = (props) => {
	if (props.data.length === 0) {
		return (
			<div clasName="row">
				<h1 className="NoTask">Not Task. Please add a Task!</h1>;
			</div>
		);
	} else {
		return (
			<div className="row">
				{props.data
					.map((task) => (
						<TaskListItem
							key={task.id}
							id={task.id}
							title={task.title}
							description={task.description}
							priority={task.priority}
							responsible={task.responsible}
							Modaldescription={props.Modaldescription}
						/>
					))
					.reverse()}
			</div>
		);
	}
};

export default TaskList;
