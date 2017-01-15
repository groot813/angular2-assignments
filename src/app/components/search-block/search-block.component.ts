import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'


@Component({
    selector: 'search-block-component',
    templateUrl: 'search-block.component.html',
    styleUrls: ['search-block.component.scss']
})
export class SearchBlockComponent implements OnInit {

    public title: string;
    public searchField: string;
    public searchResults: Array<any>;

    constructor(
        private http: Http
    ) {
        this.searchResults = [];
        this.title = "search block component";
    }

    public submit() {
        console.log("logging searchQuery: ", this.searchField);
        this.getData(this.searchField);
    }

    /**
     * ASSIGNMENT 4.1 doing the actual request in our component is a bad apple
     * lets create an MovieService class that does this for us
     * remove the getData method from our component and put it in a seperate service in the ../services folder
     * call the class MovieService
     */
    private getData (searchQuery: string) {
        this.http.get("http://www.omdbapi.com/?s=" + searchQuery + "&y=&plot=short&r=json")
            .map(res => res.json())
            .subscribe(OMDB => this.searchResults = OMDB.Search);
    }

    ngOnInit() {

    }

}
