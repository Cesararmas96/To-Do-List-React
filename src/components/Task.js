import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";
// import TaskDetails from "/TaskDetails";

class TaskDetailsContainer extends Component {
	state = {
		data: [],
		modaIsOpen: false,
	};

	fetchData = async () => {
		this.setState({ loading: true, error: null });

		try {
			const data = await api.todos.read(this.props.match.params.todoId);
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	handleOpenModal = (e) => {
		this.setState({ modalIsOpen: true });
	};

	handleCloseModal = (e) => {
		this.setState({ modalIsOpen: false });
	};

	// render() {
	// 	return (
	// 		<TaskDetails
	// 			onOpenModal={this.handleOpenModal}
	// 			onCloseModal={this.handleCloseModal}
	// 			task={this.state.data}
	// 		/>
	// 	);
	// }
}

const Task = (props) => (
	<div className="col-md-4">
		<div className="card mt-4">
			<div className="card-header">
				<h3>{props.title}</h3>

				{props.priority === "Low" && (
					<span className="badge badge-pill badge-success ml-2">
						{props.priority}
					</span>
				)}

				{props.priority === "Medium" && (
					<span className="badge badge-pill badge-warning ml-2 text-white">
						{props.priority}
					</span>
				)}

				{props.priority === "High" && (
					<span className="badge badge-pill badge-danger ml-2">
						{props.priority}
					</span>
				)}
			</div>
			<div className="card-body">
				<p>{props.description}</p>
				<p>
					<mark>{props.responsible}</mark>
				</p>
			</div>
			<div className="card-footer">
				<Link to={`todos/${props.id}`}>botto</Link>
			</div>
		</div>
	</div>
);

export default Task;
