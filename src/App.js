import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser, login } from "./actions/getAuthUser";
import { getHoroscopes } from "./actions/getHoroscopes";
import { getStarSigns } from "./actions/getStarSigns";
import { updateFavorites } from "./actions/updateFavorites";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import HoroscopeList from "./components/HoroscopeList";
import AllSigns from "./components/AllSigns";
import ScopeList from "./components/ScopeList";
import Favorites from "./components/Favorites";

class App extends Component {
  // componentWillMount() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     this.props.getCurrentUser();
  //   }
  // }

  // componentDidMount() {
  //   if (this.props.horoscopes.length === 0) {
  //     this.props.getHoroscopes(this.props.history, 1);
  //   }
  // }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.getCurrentUser();
    }
    this.props.getStarSigns();
  }

  render() {
    console.log("APP props", this.props);
    let routes = (
      <div>
        <Route
          exact
          path="/"
          render={routerProps => <LoginForm {...routerProps} />}
        />
        <Route
          exact
          path="/horoscopes"
          render={routerProps => {
            console.log("render of horoscopes route", this.props.user.id);
            if (this.props.user.id) {
              let starSign = this.props.signs.find(
                sign => sign.info.id === this.props.user.star_sign_id
              );
              return (
                <HoroscopeList
                  {...routerProps}
                  user={this.props.user}
                  horoscopes={starSign.today}
                  updateFavorites={this.props.updateFavorites}
                  loadingHoroscopes={this.props.loadingHoroscopes}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/favorites"
          render={routerProps => {
            if (this.props.user.id) {
              let starSign = this.props.signs.find(
                sign => sign.info.id === this.props.user.star_sign_id
              );
              return (
                <Favorites
                  {...routerProps}
                  user={this.props.user}
                  horoscopes={starSign.today}
                  // starSign={starSign.name}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/allsigns"
          render={routerProps => (
            <AllSigns {...routerProps} signs={this.props.signs} />
          )}
        />
        <Route
          exact
          path="/signscope/:id"
          render={routerProps => {
            let signId = routerProps.match.params.id;
            let starSign = this.props.signs.find(
              sign => sign.info.id === parseInt(signId, 10)
            );
            console.log(this.props);
            return (
              <ScopeList
                {...routerProps}
                sign={starSign}
                horoscopes={starSign.today}
              />
            );
          }}
        />
      </div>
    );
    return (
      <div className="App">
        {this.props.user.id ? <Navbar /> : null}
        {this.props.signs.length > 0 ? routes : <h1>Loading...</h1>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("in map state to props", state);
  return {
    horoscopes: state.horoscopes,
    user: state.user.current_user,
    signs: state.signs.signs,
    loadingHoroscopes: state.horoscopes.loading
  };
}

export default withRouter(
  connect(mapStateToProps, {
    getCurrentUser,
    login,
    getHoroscopes,
    getStarSigns,
    updateFavorites
  })(App)
);
