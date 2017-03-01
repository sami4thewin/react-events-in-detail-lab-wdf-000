import React from 'react';


class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click(event) {
    const array = [event.clientY, event.clientX];
    this.props.onReceiveCoordinates(array);
  }

  render() {
    return (
      <button onClick={this.click}></button>
    )
  }
}


module.exports = CoordinatesButton;
