import React, { Component } from "react";
import axios from "axios";
import { Grid, Typography, Box, Paper } from "@material-ui/core";
import color from "@material-ui/core/colors/indigo";

class Get extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getUrl: "https://reqres.in/api/users/",
      userid: 10,
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      avatar: ""
    };

    this.passNewUserId = this.passNewUserId.bind(this);
  }

  componentDidUpdate() {
    axios
      .get(this.state.getUrl + this.state.userid)
      .then(response => {
        this.setState({
          id: response.data.data.id,
          email: response.data.data.email,
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          avatar: response.data.data.avatar
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  componentDidMount() {
    axios
      .get(this.state.getUrl + this.state.userid)
      .then(response => {
        this.setState({
          id: response.data.data.id,
          email: response.data.data.email,
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          avatar: response.data.data.avatar
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  passNewUserId(event) {
    this.setState({
      userid: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={6} spacing={2}>
            <Paper>
              <Typography variant="title">
                Website URL is-----><Box>{this.state.getUrl}</Box>
              </Typography>
              Enter user id----->
              <input
                type="text"
                value={this.state.userid}
                onChange={this.passNewUserId}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography name="id">
                <label>ID</label>
                <input type="text" value={this.state.id} /> <br />
                <label>Email</label>
                <input type="text" value={this.state.email} /> <br />
                <label>First-Name</label>
                <input type="text" value={this.state.first_name} /> <br />
                <label>Last-Name</label>
                <input type="text" value={this.state.last_name} /> <br />
                <label>Avatar</label>
                <input type="text" value={this.state.avatar} />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Get;
