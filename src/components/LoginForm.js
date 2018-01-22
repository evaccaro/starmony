import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, createUser } from "../actions/getAuthUser";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      password: "",
      create_name: "",
      create_password: "",
      create_birthday: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleNewAccount = event => {
    event.preventDefault();
    this.props.createUser(this.state.create_name, this.state.create_password);
    this.props.history.push("/horoscopes");
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.login(this.state.name, this.state.password);
    this.props.history.push("/horoscopes");
  };

  render() {
    // console.log(this.state)
    return (
      <div style={{ margin: "2%", textAlign: "center" }}>
        <div>
          <i className="material-icons" style={{ fontSize: "48px" }}>
            spellcheck
          </i>
          <h4>Starmony</h4>
        </div>
        <form onSubmit={this.handleNewAccount}>
          <input
            onChange={this.handleChange}
            name="create_name"
            type="text"
            placeholder="Name"
            value={this.state.create_name}
          />
          <br />
          <input
            onChange={this.handleChange}
            name="create_password"
            type="text"
            placeholder="Password"
            value={this.state.create_password}
          />{" "}
          <br />
          <input
            onChange={this.handleChange}
            name="birthday"
            type="date"
            value={this.state.create_birthday}
          />{" "}
          <br />
          <input
            style={{ marginTop: "1%" }}
            type="submit"
            value="Create an Account"
          />
        </form>
        <h5>OR</h5>
        <form onSubmit={this.handleLogin}>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
          />
          <br />
          <input
            onChange={this.handleChange}
            name="password"
            type="text"
            placeholder="Password"
            value={this.state.password}
          />
          <br />
          <input style={{ marginTop: "1%" }} type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { login, createUser })(LoginForm));
