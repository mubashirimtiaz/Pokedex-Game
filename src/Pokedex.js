import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      {
        id: 4,
        name: "Charmander",
        type: "fire",
        base_experience: 62,
      },
      {
        id: 7,
        name: "Squirtle",
        type: "water",
        base_experience: 63,
      },
      {
        id: 11,
        name: "Metapod",
        type: "bug",
        base_experience: 72,
      },
      {
        id: 12,
        name: "Butterfree",
        type: "flying",
        base_experience: 178,
      },
      {
        id: 25,
        name: "Pikachu",
        type: "electric",
        base_experience: 112,
      },
      {
        id: 39,
        name: "Jigglypuff",
        type: "normal",
        base_experience: 95,
      },
      {
        id: 94,
        name: "Gengar",
        type: "poison",
        base_experience: 225,
      },
      {
        id: 133,
        name: "Eevee",
        type: "normal",
        base_experience: 65,
      },
    ],
  };
  render() {
    return (
      <div className="Pokedex">
        <p className="Pokedex-exp">Total experience: {this.props.exp} </p>
        <p className={this.props.isWinner ? "Pokedex-win" : "Pokedex-lose"}>
          {this.props.isWinner ? "Winning Hand" : "Losing Hand"}
        </p>
        <div className="Pokedex-card">
          {this.props.pokemon.map((i) => (
            <Pokecard
              id={i.id}
              name={i.name}
              type={i.type}
              base_experience={i.base_experience}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
