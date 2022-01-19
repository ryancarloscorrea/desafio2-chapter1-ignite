import React, {FC} from 'react';
import {MovieCard} from "./MovieCard";
import {GenreResponseProps, MovieProps} from "../App";
import '../styles/content.scss'

interface ContentProps {
    movies: MovieProps[]
    selectedGenre: GenreResponseProps
}
export const Content: FC<ContentProps> = ({movies, selectedGenre}) => {
    return (
        <div className="container">
            <header>
                <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
            </header>

            <main>
                <div className="movies-list">
                    {movies.map(movie => (
                        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
                    ))}
                </div>
            </main>
        </div>

    );
};
