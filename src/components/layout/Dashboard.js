import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';
import HomeCarousel from '../../Carousel/HomeCarousel';


export default class Dashboard extends Component {
    render() {
        return (
           
             <div className="row">
                <div className="col">
                   {/* <HomeCarousel/> */}
                   <PokemonList/>
                </div>
             </div>
           
            
            
        )
    }
}
