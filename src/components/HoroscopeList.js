import React from "react";
import { Button, Card, Image, Checkbox } from "semantic-ui-react";
import moment from "moment";

class HoroscopeList extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log("NEXT", nextProps);
  //   if (nextProps.user) {
  //     this.props.getHoroscopes(this.props.history, nextProps.user.star_sign_id);
  //   }
  // }

  state = {
    chosen: this.props.user.favorites
  };

  time = new Date().getHours();

  greeting = () => {
    if (this.time < 12) {
      return "Good morning, ";
    } else if (this.time >= 12 && this.time < 17) {
      return "Good afternoon, ";
    } else if (this.time >= 17) {
      return "Good evening, ";
    }
  };

  user_sign = props => {
    return this.props.signs.filter(
      sign => sign.info.id === this.props.user.star_sign_id
    );
  };

  handleChange = event => {
    console.log(event.target.name);
    console.log(this.state.chosen);
    let newChosen;
    if (this.state.chosen.includes(event.target.name)) {
      newChosen = this.state.chosen.filter(item => item !== event.target.name);
    } else {
      newChosen = [...this.state.chosen, event.target.name];
    }
    this.setState({
      chosen: newChosen
    });
  };

  horoscopesList = props => {
    // for the first time, or when a user has no favorites, show all
    if (this.props.user) {
      return this.props.horoscopes.map(horoscope => {
        let place = () => {
          if (horoscope.origin.startsWith("com")) {
            return "astrology-answers";
          } else {
            return horoscope.origin;
          }
        };

        return (
          <Card id="horoscopeCard">
            <Card.Content>
              <Card.Header>{place()}.com</Card.Header>
              <Card.Description id="test">{horoscope.content}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              {/* <Checkbox
                label="Add to Favorites"
                // className="star"
                id="addFavorite"
                onClick={this.handleChange}
                name={horoscope.origin}
                checked={this.state.chosen.includes(horoscope.origin)}
              /> */}
              <Button
                // className="star"
                id="addFavorite"
                onClick={this.handleChange}
                name={horoscope.origin}
                className={
                  this.state.chosen.includes(horoscope.origin)
                    ? "blackstar"
                    : "star"
                }
              />
              <label for={horoscope.origin}>
                {this.state.chosen.includes(horoscope.origin)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </label>
              {/* <div>
                <input
                  type="checkbox"
                  class="star"
                  id="addFavorite"
                  onChange={this.handleChange}
                  name={horoscope.origin}
                  checked={this.state.chosen.includes(horoscope.origin)}
                />
                <label for="addFavorite">Add to Favorites</label>
              </div> */}
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
        <h3>
          {this.greeting()} {this.props.user.name}. Browse today's{" "}
          {this.user_sign()[0].info.sign} horoscopes.
        </h3>
        {/* <h3>Here are your favorite {this.props.starSign.name} horoscopes</h3> */}
        {this.props.horoscopes.length ? (
          <Card.Group itemsPerRow={3}>{this.horoscopesList()}</Card.Group>
        ) : (
          this.renderMessage()
        )}
        <br />
        <br />
        <Button
          color="grey"
          onClick={() =>
            this.props.updateFavorites(this.state.chosen, this.props.history)
          }
        >
          Update Favorites
        </Button>
      </div>
    );
  }
}

export default HoroscopeList;
