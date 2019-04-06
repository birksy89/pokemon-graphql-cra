import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Icon } from 'antd';
import PokemonCard from "./PokemonCard";
import Fetching from "./Fetching";
import styled from "styled-components";


const EvolvesInto = styled.div`
    position: absolute;
    z-index:1;
    top: 40%;
    left: -25px;
    color: #2a5793;
    background-color: #f5f5f5;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 1px solid;
    overflow: hidden;

    @media (max-width: 575px) {
    top: -50px;
    left: 50%;
    transform: rotate(90deg) translateY(50%);
  }
`;




export default class PokemonDetail extends Component {
  render() {
    const { id: name } = this.props.match.params;
    //console.log(name);

    const FEED_QUERY = gql`
      query PokeDetails {
        pokemon(name: "${name}") {
          id
          number
          name
          maxCP
          maxHP
          image
          types
          evolutions {
            id
            number
            name
            maxCP
            maxHP
            image
            types
          }
        }
      }
    `;

    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Fetching />;
          if (error) return <div>Error</div>;

          const { pokemon } = data;
          //console.log(pokemon);

          if (!pokemon) {
            return <h1>Oh No!</h1>;
          } else {
            return (
              <>
                <div className="row justify-content-center">
                  <div className="col-12">
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                  </div>

                </div>

                {pokemon.evolutions !== null &&
                  <>
                  <hr className="mb-5" />
                  <h2 className="text-center mb-5">Evolution Path</h2>
                    <div className="row justify-content-center">
                      <div className="col-12 col-sm-6 col-lg-4">
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                      </div>

                      {pokemon.evolutions &&
                        pokemon.evolutions.map((evolved, index) => {
                          return (
                            <div key={evolved.id} className="col-12 col-sm-6 col-lg-4">
                              <EvolvesInto><Icon type="right" /></EvolvesInto>
                              <PokemonCard pokemon={evolved} />
                            </div>
                          );
                        })}
                    </div>
                  </>
                }



              </>
            );
          }
        }}
      </Query>
    );
  }
}
