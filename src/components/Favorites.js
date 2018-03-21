import React from "react";
import { Card, Image } from "semantic-ui-react";

class Favorites extends React.Component {
  favoritesList = props => {
    // for the first time, or when a user has no favorites, show all
    if (this.props.user && this.props.user.favorites.length > 0) {
      return this.props.horoscopes
        .filter(horoscope => {
          return this.props.user.favorites.includes(horoscope.origin);
        })
        .map(horoscope => {
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
                <Card.Description>{horoscope.content}</Card.Description>
              </Card.Content>
            </Card>
          );
        });
    } else {
      return (
        <div class="alt">
          <p>
            You haven't selected any favorites yet! Add some horoscopes to your
            favorites via the "See All My Horoscopes" page!
          </p>
        </div>
      );
    }
  };

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

  back() {
    if (this.props.user.favorites.length <= 3) {
      return { height: "100vh" };
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log("PROPS", this.props);
    return (
      <div id="fullList" class="starsFave" style={this.back()}>
        <h3>Horoscopes from {this.props.user.name}'s Favorite Astrologers</h3>
        {/* <h3>Here are your favorite {this.props.starSign.name} horoscopes</h3> */}
        {this.props.horoscopes.length ? (
          <Card.Group itemsPerRow={1}>{this.favoritesList()}</Card.Group>
        ) : (
          this.renderMessage()
        )}
      </div>
    );
  }
}

export default Favorites;
