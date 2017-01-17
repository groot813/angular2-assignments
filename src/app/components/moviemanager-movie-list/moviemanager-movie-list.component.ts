import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie-service/movie-service.service";
import {MovieItemsFactory} from "../../factories/MovieItemsFactory";
import {IMovieItem} from "../../interfaces/IMovieItem";

@Component({
    selector: 'moviemanager-movie-list',
    templateUrl: './moviemanager-movie-list.component.html',
    styleUrls: ['./moviemanager-movie-list.component.scss']
})
export class MoviemanagerMovieListComponent implements OnInit {

    public movies: Array<IMovieItem>;
    public bucketItems: Array<IMovieItem>;

    constructor(private movieService: MovieService) {
        this.movies = [];
        this.bucketItems = [];
    }

    ngOnInit() {
        this.movieService.OmdbData$.subscribe((data) => {
            this.movies = MovieItemsFactory.create(data.Search);
        })
    }

    public addToMovieBucket (movie) {
        this.bucketItems.push(movie);
    }

    public movieBucketCallBack (movie: IMovieItem) {
        alert(movie.title + " has been removed");
    }

}
