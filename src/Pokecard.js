import React, { Component } from "react";
import PadToThree from "./PadToThree";
import "./Pokecard.css";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    const id = PadToThree(this.props.id);
    const imgSrc = `${POKE_API}${id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image-div">
          <img className="Pokecard-image" src={imgSrc} alt={this.props.name} />
        </div>
        <h3 className="Pokecard-data">
          type:
          <span style={{ color: "orange" }}> {this.props.type}</span>
        </h3>
        <h3 className="Pokecard-data">
          exp:
          <span style={{ color: "cornflowerblue" }}>
            {" "}
            {this.props.base_experience}
          </span>
        </h3>
      </div>
    );
  }
}

export default Pokecard;
