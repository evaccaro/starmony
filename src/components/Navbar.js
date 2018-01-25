import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/getAuthUser";
import { Button, Menu, Sticky } from "semantic-ui-react";

class NavBar extends React.Component {
  handleLogout = event => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <Sticky id="nav">
        <Menu size="huge">
          <NavLink className="item" to="/allsigns">
            See All Signs
          </NavLink>
          <NavLink className="item" to="/horoscopes">
            See All My Horoscopes
          </NavLink>
          <NavLink className="item" to="/favorites">
            See My Favorites
          </NavLink>
          <Menu.Item position="right">
            <Button color="grey" onClick={this.handleLogout}>
              Log Out
            </Button>
          </Menu.Item>
        </Menu>
      </Sticky>
      // {/* <ul>
      //   <div
      //     style={{ width: "25%", textAlign: "left", display: "inline-block" }}
      //   >
      //     <li>
      //       <NavLink to="/allsigns">See All Signs</NavLink>
      //     </li>
      //   </div>
      //   <div
      //     style={{ width: "25%", textAlign: "left", display: "inline-block" }}
      //   >
      //     <li>
      //       <NavLink to="/horoscopes">See All My Horoscopes</NavLink>
      //     </li>
      //   </div>
      //   <div
      //     style={{ width: "25%", textAlign: "left", display: "inline-block" }}
      //   >
      //     <li>
      //       <NavLink to="/favorites">See My Favorites</NavLink>
      //     </li>
      //   </div>
      //   <div
      //     onClick={this.handleLogout}
      //     style={{ width: "25%", textAlign: "left", display: "inline-block" }}
      //   >
      //     <li>Log Out</li>
      //   </div>
      // </ul> */}
    );
  }
}
export default withRouter(connect(null, { logout })(NavBar));
