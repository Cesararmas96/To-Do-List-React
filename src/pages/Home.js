import React, { Component } from "react";

import Navigation from "../components/Navigation";
import TaskList from "../components/TaskList";
import TaskNew from "../components/TaskNew";
import PageLoading from "../components/PageLoading";

import "../components/styles/logo.css";
import "./styles/Home.css";
import Logo from "../assets/logo.svg";
import api from "../api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,

      data: {
        id: "",
        title: "",
        responsible: "",
        description: "",
        priority: "",
      },
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

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
    let form = e.target;
    this.setState({ loading: true, error: null });

    try {
      await api.todos.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
    form.reset();
    this.fetchData();
  };

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.todos.list();

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <div className="App">
        <Navigation title="Tasks" total={this.state.data.length} />

        <div className="container pt-4">
          <div className="row mt-4 ">
            <div className="col-md-3 ">
              <div className="containerForm ">
                <img src={Logo} className="App-logo" alt="logo" />

                <TaskNew
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                  formValue={this.state.form}
                />
              </div>
            </div>

            <div className="col-md-9 ">
              <h1 className="title">Tasks List</h1>
              <div className="row list ml-1 mr-1">
                {this.state.loading ? (
                  <PageLoading />
                ) : (
                  <TaskList
                    loading={this.state.loading}
                    data={this.state.data}
                    modalIsOpen={this.state.modalIsOpen}
                    openModal={this.handleOpen}
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                    onIdTask={this.handleId}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
