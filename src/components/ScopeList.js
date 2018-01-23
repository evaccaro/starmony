import React from "react";

class ScopeList extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log("WILL", nextProps);
  //   if (nextProps.sign && nextProps.horoscopes.content.length <= 0) {
  //     this.props.getHoroscopes(this.props.history, nextProps.sign.id);
  //   }
  // }
  //
  // componentDidMount() {
  //   this.props.getHoroscopes(this.props.history, this.props.match.params.id);
  // }

  horoscopesList = props => {
    if (this.props.sign) {
      return this.props.horoscopes.map(horoscope => {
        return <p>{horoscope.content}</p>;
      });
    }
  };

  render() {
    console.log("heres props", this.props);
    return (
      <div>
        {this.props.sign ? <h2>{this.props.sign.info.sign}</h2> : null}
        {this.horoscopesList()}
      </div>
    );
  }
}

export default ScopeList;
