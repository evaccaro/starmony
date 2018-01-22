import React, { Component } from "react";

import "./App.css";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/getAuthUser";
import { getHoroscopes } from "./actions/getHoroscopes";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.getCurrentUser();
    }
  }

  componentDidMount() {
    if (this.props.horoscopes.length === 0) {
      this.props.getHoroscopes(this.props.history);
    }
  }

  render() {
    console.log("in render", this.props);

    if (localStorage.getItem("token")) {
      //&& this.props.location.pathname === '/'
      return <HomePage />;
    } else {
      return <LoginForm />;
    }
  }
}

// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
//     ...state
//   }
// }

// <div className='App'>
//   <div className="navbar">
//     <NavBar name={this.props.name}/>
//   </div>
//   <Switch>
//     <Route exact path='/' render={() => <LoginForm />} />
//     <Route exact path='/add/goal' render={() => <GoalForm />} />
//     <Route exact path='/goal/:id/add/log' render={form} />
//     <Route exact path='/goals' render={() => <GoalContainer />} />
//     <Route exact path='/goal/:id/show' render={() => <ShowGoalContainer />} />
//   </Switch>
// </div>

function mapStateToProps(state) {
  console.log("in map state to props");
  return { horoscopes: state.horoscopes.content };
}

export default withRouter(
  connect(mapStateToProps, { getCurrentUser, getHoroscopes })(App)
);
