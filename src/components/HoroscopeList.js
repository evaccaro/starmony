import React from "react";
import { connect } from "react-redux";

const HoroscopeList = props => {
  this.state = {
    horoscopes: []
  };
  function listScopes() {
    return props.horoscopes.map(horoscope => {
      return <p>{horoscope.content}</p>;
    });
  }

  return <div>{listScopes()}</div>;
};

function mapStateToProps(state) {
  console.log("in map state to props");
  return { horoscopes: state.horoscopes };
}

export default connect(mapStateToProps)(HoroscopeList);
