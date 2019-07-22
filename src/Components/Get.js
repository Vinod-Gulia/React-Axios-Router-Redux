import React, { Component } from "react";
import axios from "axios";

class Get extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ""
    };
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users/10").then(response => {
      this.setState({
        list: JSON.stringify(response.data)
      });
    });
  }

  render() {
    return <div>List is {this.state.list}</div>;
  }
}

export default Get;
