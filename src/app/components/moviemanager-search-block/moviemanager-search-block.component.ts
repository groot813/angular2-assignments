import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
import {MovieService} from "../../services/movie-service/movie-service.service";


@Component({
    selector: 'moviemanager-search-block',
    templateUrl: 'moviemanager-search-block.component.html',
    styleUrls: ['moviemanager-search-block.component.scss'],
    providers: [MovieService]
    /**
     * ASSIGNMENT 5.3
     * our MovieService provider wil be used by sibling components, angulars scope prevents the instance to be shared at the moment because of the provider for the movie service being added here.
     * ad it to the parent component in the component tree so the service will be available to it children and thus the sibling moviefinder-movie-list
     */
})
export class MovieManagerSearchBlockComponent implements OnInit {

    public title: string;
    public searchField: string;


    constructor(private movieService: MovieService) {
        this.title = "search block component";
    }

    public submit() {
        console.log(this.searchField);
        this.movieService.getData(this.searchField);
    }

    ngOnInit() {

    }

}
