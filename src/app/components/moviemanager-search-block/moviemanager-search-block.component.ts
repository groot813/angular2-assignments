import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
import {MovieService} from "../../services/movie-service/movie-service.service";


@Component({
    selector: 'search-block-component',
    templateUrl: 'moviemanager-search-block.component.html',
    styleUrls: ['moviemanager-search-block.component.scss'],
    providers: [MovieService]
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
