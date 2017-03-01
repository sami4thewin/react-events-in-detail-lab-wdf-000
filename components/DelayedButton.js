import React from 'react';


class DelayedButton extends React.Component {
  constructor(props) {
    super(props);

    this.dd = this.dd.bind(this);
  }

  dd(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.dd}></button>
    )
  }
}


module.exports = DelayedButton;
