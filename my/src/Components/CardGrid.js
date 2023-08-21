import React from 'react';
import './CardGrid.css';
import CardTemplate from './CardTemplate';

export default function CardGrid(props) {
    const { moviesRecords, setSelectedMovie } = props;
    return (
        <div className="container">
            {moviesRecords && moviesRecords.map((movie) => <CardTemplate
                movieName={movie?.original_title}
                posterImage={movie?.poster_path}
                rating={movie?.vote_average}
                description={movie?.overview}
                setActiveCard={setSelectedMovie}
                movieData={movie}
                key={movie?.id}
            />
            )}
        </div>
    );
}
