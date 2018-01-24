import React from "react";

class Favorites extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log("NEXT", nextProps);
  //   if (nextProps.user) {
  //     this.props.getHoroscopes(this.props.history, nextProps.user.star_sign_id);
  //   }
  // }
  favoritesList = props => {
    // for the first time, or when a user has no favorites, show all
    if (this.props.user && this.props.user.favorites.length > 0) {
      return this.props.horoscopes
        .filter(horoscope => {
          return this.props.user.favorites.includes(horoscope.origin);
        })
        .map(horoscope => {
          return <p>{horoscope.content}</p>;
        });
    } else {
      return <p>You haven't selected any favorites yet!</p>;
    }
  };

  renderMessage() {
    return (
      <p>
        We haven't yet collected horoscopes for today. Try again sometime later.
      </p>
    );
  }

  render() {
    console.log("PROPS", this.props);
    return (
      <div>
        <h3>Welcome back, {this.props.user.name}</h3>
        {/* <h3>Here are your favorite {this.props.starSign.name} horoscopes</h3> */}
        {this.props.horoscopes.length
          ? this.favoritesList()
          : this.renderMessage()}
      </div>
    );
  }
}

export default Favorites;
