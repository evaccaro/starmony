import React from "react";
import moment from "moment";
import { NavLink, withRouter } from "react-router-dom";

class AllSigns extends React.Component {
  starSignsList = props =>
    this.props.signs.map(sign => {
      return (
        <div>
          <NavLink to={`/signscope/${sign.info.id}`}>
            <h5>{sign.info.sign}</h5>
          </NavLink>
          <p>
            {moment(sign.info.start_date).format("MMMM Do ")} -{" "}
            {moment(sign.info.end_date).format("MMMM Do ")}
          </p>
        </div>
      );
    });
  render() {
    console.log("heres props", this.props);
    return <div>{this.starSignsList()}</div>;
  }
}

export default AllSigns;
