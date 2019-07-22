import React, { Component } from "react";

class QATeam extends Component {
  team = [
    {
      Name: "Vinod",
      Role: "AM"
    },
    {
      Name: "Paavan",
      Role: "TL"
    }
  ];

  teammap = this.team.map(member => (
    <div>
      <button>Name --> {member.Name}</button>
      <br />
      <label>Role --> {member.Role}</label>
    </div>
  ));
  render() {
    return <div>{this.teammap}</div>;
  }
}

export default QATeam;
