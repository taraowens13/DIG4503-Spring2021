import React from 'react';
import AddMovie from '../Add';
import DeleteMovie from '../Delete';

const Movie = ({ title, img, details}) => (
    <div className="card">
        <img></img>
        <div className="container">
            <h4><b>Shutter Island</b></h4>
            <span className="movie-rating"></span>
            <AddMovie />
            <DeleteMovie />
    </div>
    </div>
    
);


export default Movie;
