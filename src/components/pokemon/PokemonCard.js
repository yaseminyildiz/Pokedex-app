import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import spinner from '../layout/spinner.gif';
import PokemonFav from './PokemonFav';




const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #F2F2F2;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: translateY(-20px);
  }
 
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 150px;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    transform: translateY(-20px);
  }
`;


export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    toManyRequests: false,
   

  };
  

  componentDidMount() {
    const { name, url } = this.props;

    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    //const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    console.log(this.state.pokemon);

    
    this.setState({ name, imageUrl, pokemonIndex});
   
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 my-5">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
            <Card className="w-100 p-2 rounded text-center">
            <h5 className="card-header">{this.state.pokemonIndex}</h5> 
            {this.state.imageLoading ? (
              <img
                src={spinner}
                style={{ width: '5em', height: '5em' }}
                className="card-img-top rounded text-center shadow bg-white mx-auto d-block mt-2"
              />
            ) : null}
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              src={this.state.imageUrl}
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ toManyRequests: true })}
              style={
                this.state.toManyRequests
                  ? { display: 'none' }
                  : this.state.imageLoading
                  ? null
                  : { display: 'block' }
              }
            />
            {this.state.toManyRequests ? (
              <h6 className="mx-auto">
                <span className="badge badge-danger mt-2">
                  To Many Requests
                </span>
              </h6>
            ) : null}
            <div className="card-body mx-auto">
              <h6 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </h6>
            </div>
          </Card>
          {/* <button  key={e} onClick={()=>handleFavAddClick(e)}>{e}</button> */}
        </StyledLink>
      
  
      </div>
    );
  }
}