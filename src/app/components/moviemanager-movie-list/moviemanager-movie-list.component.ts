import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie-service/movie-service.service";

@Component({
    selector: 'app-moviemanager-movie-list',
    templateUrl: './moviemanager-movie-list.component.html',
    styleUrls: ['./moviemanager-movie-list.component.scss']
})
export class MoviemanagerMovieListComponent implements OnInit {

    public searchResults: Array<any>;

    constructor(private movieService: MovieService) {
        this.searchResults = [];
    }

    ngOnInit() {
        /**
         * ASSIGNMENT: 5.2: subscribe and show in template
         * now that our data store has been filled by our service, we can also subscribe to the observable from here and get the data
         * create another propery on this class and call it movieDataStoreSubscribtion.
         * Now fil this property with an imidiatly invoked method that saves the data in the searchResults property
         * @example: this.movieService.myObservable$.subscribe((data) => {
         *     this.myPropArray = data;
         * })
         * IMPORTANT: WHEN U GET THIS TO WORK IN THE BROWSER AND YOU SEE THE LIST OF RESULTS REAPPEAR, U SHOULD BRUSH YOUR SHOULDERS OFF, CUZ YOU KNOW ANGULAR2!
         */
    }

}
