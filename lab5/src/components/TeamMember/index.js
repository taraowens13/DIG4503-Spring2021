import React from "react"

export default class TeamMember extends React.Component {
  render() {
    return (
      <h2>{this.props.pokemon.name}</h2>
    );
  }
}