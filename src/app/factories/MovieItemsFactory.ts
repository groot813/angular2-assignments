import {MovieItem} from "../models/MovieItem";
import {IMovieItem} from "../interfaces/IMovieItem";

export class MovieItemsFactory {

    static create(rawMovies): Array<IMovieItem> {

        let movies: Array<IMovieItem> = [];

        for (let i =0; i < rawMovies.length; i++) {
            movies.push(new MovieItem(
                rawMovies[i].Title,
                rawMovies[i].Year,
                rawMovies[i].imdbID,
                rawMovies[i].Type,
                rawMovies[i].Poster,
            ))
        }

        return movies;
    }

}