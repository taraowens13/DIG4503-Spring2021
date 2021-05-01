import React from 'react';

const API_IMG = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, img,
details}) => (
    <div className="movie">
        <img src={API_IMG + img} alt={title} />
        <div className="movie-info">
            <h3>The Avengers</h3>
            <span>4.5</span>
        </div>
        <div className="movie-over">
        </div>
    </div>
);


export default Movie;