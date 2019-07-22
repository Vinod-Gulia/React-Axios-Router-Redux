import React, { Component } from "react";

class FirstComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Paavan"
    };
  }

  render() {
    return (
      <div>
        <h2>My Learning App</h2>
        <input name="name" type="text" value={this.state.name} />
      </div>
    );
  }
}

export default FirstComp;
