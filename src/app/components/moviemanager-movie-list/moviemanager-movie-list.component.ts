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

    constructor(private movieService: MovieService) {
        this.movies = [];
    }

    ngOnInit() {
        this.movieService.OmdbData$.subscribe((data) => {
            this.movies = MovieItemsFactory.create(data.Search);
        })
    }

    /**
     * ASSIGNMENT: 7.5
     * create a method to put in the output property of our movie-bucket component
     * throw an alert with the parameter
     * @example public myOutPutMethod (itemClicked: IMovieItem) {
     *    alert("item: " + itemClicked.title + " has been removed from bucketlist")
     * }
     */

}
