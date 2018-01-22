import React, { Component } from "react";
import "../App.css";

import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import HoroscopeList from "./HoroscopeList";

class HomePage extends Component {
  // constructor(){
  //   super()
  //
  //   this.state= {
  //     color: 'black'
  //   }
  // }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <Navbar name={this.props.name} />
          <HoroscopeList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("in map state to props");
  return { horoscopes: state.horoscopes.content };
}

export default withRouter(connect(mapStateToProps, null)(HomePage));
