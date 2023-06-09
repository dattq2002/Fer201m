import React, { Component } from "react";
import { films } from "../shared/ListOfFilms"
export default class Film extends Component {
    render() {
        return (

            <div className='container'>
                {films.map((movie) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={movie.image} />
                            <h3>{movie.Title}</h3>
                            <p className='title'>{movie.Year} - {movie.Nation}</p>
                            <p><button class="glow-on-hover" type="button">Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>

        )
    }
}
