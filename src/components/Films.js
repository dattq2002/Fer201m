import React from "react";
import { films } from "../shared/ListOfFilms"
import { useState } from "react";
export default function Film () {
    const [film, setFilm] = useState([]);
        return (
            <div className='container'>
                {films.map((movie) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={movie.image} />
                            <h3>{movie.Title}</h3>
                            <p className='title'>{movie.Year} - {movie.Nation}</p>
                            <p><button class="glow-on-hover" type="button" onClick={() => {setFilm(movie)}}>
                                <a href="#popup1" id="openPopUp">Detail</a>
                                </button>
                            </p>
                        </div>
                    </div>
                ))}
                <div id="popup1" className="overlay">
                    <img src={film.image}/>
                    <h2>{film.Title}</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        {film.info}
                    </div>
                </div>
            </div>

        )
    
}
