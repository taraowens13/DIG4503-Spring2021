import React from "react"
import TeamMember from "../TeamMember";

export default class Team extends React.Component {
  render() {
    return (
      <div>
        <h1>{"Your Team" + this.props.menuName}</h1>
        <TeamMember {...this.props.pokemon.name}></TeamMember>
      </div>
    )
  }
}