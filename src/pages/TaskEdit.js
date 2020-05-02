import React, { Component } from "react";
import TaskForm from "../components/TaskForm";
import Navigation from "../components/Navigation";
import PageLoading from "../components/PageLoading";
import api from "../api";
import "./styles/TaskEdit.css";

class TaskEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			error: null,
			form: {
				title: "",
				description: "",
				responsible: "",
				priority: "",
			},

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

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async (e) => {
		this.setState({ loading: true, error: null });

		try {
			const data = await api.todos.read(this.props.match.params.todoId);

			this.setState({ loading: false, form: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ loading: true, error: null });

		try {
			await api.todos.update(this.props.match.params.todoId, this.state.form);
			this.setState({ loading: false });
			this.props.history.push("/");
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		if (this.state.loading) {
			return <PageLoading />;
		} else {
			return (
				<div>
					<Navigation title="Task" total="1" />

					<div className="center mt-4 p-4">
						<h1 className="text-white text-center mt-4 mb-4">Task Edit</h1>
						<TaskForm
							onChange={this.handleChange}
							onSubmit={this.handleSubmit}
							formValues={this.state.form}
							modalIsOpen={this.state.modalIsOpen}
							openModal={this.handleOpen}
							onCancel={this.handleCancel}
							onConfirm={this.handleConfirm}
						/>
					</div>
				</div>
			);
		}
	}
}

export default TaskEdit;
