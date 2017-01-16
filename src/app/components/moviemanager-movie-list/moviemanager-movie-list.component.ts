import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie-service/movie-service.service";

@Component({
    selector: 'moviemanager-movie-list',
    templateUrl: './moviemanager-movie-list.component.html',
    styleUrls: ['./moviemanager-movie-list.component.scss']
})
export class MoviemanagerMovieListComponent implements OnInit {

    public searchResults: Array<any>;

    constructor(private movieService: MovieService) {
        this.searchResults = [];
    }

    ngOnInit() {

        this.movieService.OmdbData$.subscribe((data) => {
            console.log(data);
            this.searchResults = data.Search;
        })
    }

}
