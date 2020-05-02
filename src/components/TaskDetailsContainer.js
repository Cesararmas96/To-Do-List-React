import React, { Component } from "react";

import api from "../api";
import TaskDetails from "./TaskDetails";

class TaskDetailsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null,
			data: [],
			modalIsOpen: false,
			onConfirm: false,
			onCancel: true,
			deleteFile: false,
		};
		this.handleOpen = this.handleOpen.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleDeleteFile = this.handleDeleteFile.bind(this);
		this.handleConfirm = this.handleConfirm.bind(this);
	}

	handleCancel() {
		this.setState({ modalIsOpen: false });
	}

	handleDeleteFile() {
		this.handleDelete();
	}

	handleConfirm() {
		this.setState({ deleteFile: true, modalIsOpen: false });
		this.handleDeleteFile();
	}

	handleOpen() {
		this.setState({ modalIsOpen: true });
	}

	handleDelete = async (e) => {
		this.setState({ loading: true, error: null });
		try {
			await api.todos.remove(this.props.match.params.todoId);
			this.props.history.push("/");
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		return (
			<TaskDetails
				task={this.state.data}
				modalIsOpen={this.state.modalIsOpen}
				openModal={this.handleOpen}
				onCancel={this.handleCancel}
				onConfirm={this.handleConfirm}
			/>
		);
	}
}

export default TaskDetailsContainer;
