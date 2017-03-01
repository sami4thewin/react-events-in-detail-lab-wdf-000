import React from 'react';


class DelayedButton extends React.Component {
  constructor(props) {
    super(props);

    this.delay = this.delay.bind(this);
  }

  dd(event) {
    event.persist();
    
  }

  render() {
    return (
      <button onClick={this.dd}></button>
    )
  }
}


module.exports = DelayedButton;
