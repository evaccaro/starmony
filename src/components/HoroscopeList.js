import React from "react";

class HoroscopeList extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log("NEXT", nextProps);
  //   if (nextProps.user) {
  //     this.props.getHoroscopes(this.props.history, nextProps.user.star_sign_id);
  //   }
  // }
  horoscopesList = props => {
    // for the first time, or when a user has no favorites, show all
    if (this.props.user) {
      return this.props.horoscopes.map(horoscope => {
        return <p>{horoscope.content}</p>;
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
      <p>
        We haven't yet collected horoscopes for today. Try again sometime later.
      </p>
    );
  }

  render() {
    console.log("PROPS", this.props);
    return (
      <div>
        <h3>Welcome, {this.props.user.name}</h3>
        {/* <h3>Here are your favorite {this.props.starSign.name} horoscopes</h3> */}
        {this.props.horoscopes.length
          ? this.horoscopesList()
          : this.renderMessage()}
      </div>
    );
  }
}

export default HoroscopeList;
