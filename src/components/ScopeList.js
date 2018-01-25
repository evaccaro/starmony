import React from "react";
import { Button, Card, Image, Checkbox } from "semantic-ui-react";

class ScopeList extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log("WILL", nextProps);
  //   if (nextProps.sign && nextProps.horoscopes.content.length <= 0) {
  //     this.props.getHoroscopes(this.props.history, nextProps.sign.id);
  //   }
  // }
  //
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // horoscopesList = props => {
  //   if (this.props.sign) {
  //     return this.props.horoscopes.map(horoscope => {
  //       return <p>{horoscope.content}</p>;
  //     });
  //   }
  // };
  //
  // render() {
  //   console.log("heres props", this.props);
  //   return (
  //     <div id="fullList" class="stars">
  //       {this.props.sign ? <h2>{this.props.sign.info.sign}</h2> : null}
  //       {this.horoscopesList()}
  //     </div>
  //   );
  // }

  horoscopesList = props => {
    // for the first time, or when a user has no favorites, show all
    if (this.props.sign) {
      return this.props.horoscopes.map(horoscope => {
        let place = () => {
          if (horoscope.origin.startsWith("com")) {
            return "astrolis";
          } else {
            return horoscope.origin;
          }
        };

        return (
          <Card id="horoscopeCard">
            <Card.Content>
              <Card.Header>{place()}.com</Card.Header>
              <Card.Description>{horoscope.content}</Card.Description>
            </Card.Content>
          </Card>
          // {/* <div>
          //   <p>{horoscope.content}</p>
          //   <div>
          //     <input
          //       type="checkbox"
          //       class="star"
          //       id="addFavorite"
          //       onChange={this.handleChange}
          //       name={horoscope.origin}
          //       checked={this.state.chosen.includes(horoscope.origin)}
          //     />
          //     <label for="addFavorite">Add to Favorites</label>
          //   </div>
          // </div> */}
        );
      });
      // return this.props.horoscopes.filter(horoscope => {
      // this.props.user.favorites.includes(horoscope.origin)
      // }).map(horoscope => {
      //   return <p>{horoscope.content}</p>;
      // });
    }
  };
  // horoscopesList = props =>
  //   this.props.horoscopes.map(horoscope => {
  //     return <p>{horoscope.content}</p>;
  //   });

  renderMessage() {
    return (
      <div class="alt">
        <p>
          We haven't yet collected horoscopes for today. Try again sometime
          later.
        </p>
      </div>
    );
  }

  render() {
    console.log("PROPS", this.props);
    console.log("time", this.time < "12:00pm");

    return (
      <div id="fullList" class="stars">
        {this.props.sign ? <h2>{this.props.sign.info.sign}</h2> : null}
        {this.props.horoscopes.length ? (
          <Card.Group itemsPerRow={3}>{this.horoscopesList()}</Card.Group>
        ) : (
          this.renderMessage()
        )}
        <br />
        <br />
      </div>
    );
  }
}

export default ScopeList;
