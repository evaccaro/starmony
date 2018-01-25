import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, createUser } from "../actions/getAuthUser";
import { Button, Input } from "semantic-ui-react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      create_name: "",
      create_password: "",
      create_birthday: "",
      star_sign_id: "",
      name: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleNewAccount = event => {
    event.preventDefault();
    this.props.createUser(
      this.state.create_name,
      this.state.create_password,
      this.state.create_birthday,
      this.props.history
    );
    this.props.history.push("/horoscopes");
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.login(this.state.name, this.state.password, this.props.history);
    this.props.history.push("/horoscopes");
  };

  render() {
    console.log(this.state);
    return (
      <div
        class="stars"
        style={{
          height: window.innerHeight,
          width: window.innerWidth,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div id="starmony">
            <h4>Starmony</h4>
          </div>
          <br />
          <br />
          <br />
          <form onSubmit={this.handleNewAccount}>
            {/* <input
              onChange={this.handleChange}
              name="create_name"
              type="text"
              placeholder="Name"
              value={this.state.create_name}
              required
            /> */}
            <Input
              size="large"
              placeholder="Name"
              onChange={this.handleChange}
              name="create_name"
              type="text"
              placeholder="Name"
              value={this.state.create_name}
              required
            />
            <br />
            {/* <input
              onChange={this.handleChange}
              name="create_password"
              type="password"
              placeholder="Password"
              value={this.state.create_password}
              required
            /> */}
            <Input
              size="large"
              onChange={this.handleChange}
              name="create_password"
              type="password"
              placeholder="Password"
              value={this.state.create_password}
              required
            />
            <br />
            {/* <input
              onChange={this.handleChange}
              name="create_birthday"
              type="date"
              value={this.state.create_birthday}
              required
            /> */}
            <Input
              size="large"
              onChange={this.handleChange}
              name="create_birthday"
              type="date"
              value={this.state.create_birthday}
              required
            />
            <br />
            <Button color="grey">Create an Account</Button>
          </form>
          <h4>or</h4>
          <form onSubmit={this.handleLogin}>
            {/* <input
              onChange={this.handleChange}
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              required
            /> */}
            <Input
              size="large"
              onChange={this.handleChange}
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              required
            />
            <br />
            {/* <input
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              required
            /> */}
            <Input
              size="large"
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              required
            />
            <br />
            <Button color="grey">Log In</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { login, createUser })(LoginForm));
