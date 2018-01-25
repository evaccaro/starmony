import React from "react";
import moment from "moment";
import { NavLink, withRouter } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";

class AllSigns extends React.Component {
  starSignsList = props =>
    this.props.signs.map(sign => {
      return (
        <Card>
          <Card.Content>
            <Image src={`zodiac_images/${sign.info.sign}.jpg`} />
            <Card.Header>
              <NavLink to={`/signscope/${sign.info.id}`}>
                <h5>{sign.info.sign}</h5>
              </NavLink>
            </Card.Header>
            <Card.Description>
              <p>
                {moment(sign.info.start_date).format("MMMM Do ")} -{" "}
                {moment(sign.info.end_date).format("MMMM Do ")}
              </p>
            </Card.Description>
          </Card.Content>
        </Card>
        // {/* <div>
        //   <NavLink to={`/signscope/${sign.info.id}`}>
        //     <h5>{sign.info.sign}</h5>
        //   </NavLink>
        //   <p>
        //     {moment(sign.info.start_date).format("MMMM Do ")} -{" "}
        //     {moment(sign.info.end_date).format("MMMM Do ")}
        //   </p>
        // </div> */}
      );
    });
  render() {
    console.log("heres props", this.props);

    return (
      <div id="fullList">
        <Card.Group itemsPerRow={3}>{this.starSignsList()}</Card.Group>
      </div>
    );
  }
}

export default AllSigns;
