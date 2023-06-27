import React from "react";
import { films } from "../shared/ListOfFilms"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Film() {
    const [film, setFilm] = useState([]);
    return (
        <div class="projects">
            <h1 class="heading" > List of Movie </h1>
            <div className="box-container">
                {films.map((movie) => (
                    <div key={movie.id}>
                        <div className='box'>
                            <div className="image">
                                <img src={movie.image} />
                            </div>
                            <h3>{movie.Title}</h3>
                            <p className='title'>{movie.Year} - {movie.Nation}</p>

                            <Link to={`detail/${movie.id}`}>
                                <p><button class="glow-on-hover" type="button" onClick={() => { setFilm(movie) }}>
                                    <a href="#popup1" id="openPopUp">Detail</a>
                                </button>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    {/* <img src={film.image} /> */}
                    <h2>{film.name}</h2>
                    {/* <a className='close' href='#'>&times;</a> */}
                    <div className='content'>
                        {film.info}
                    </div>
                </div>
            </div>
        </div>
    )
}





