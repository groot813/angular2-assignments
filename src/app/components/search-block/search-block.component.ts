import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'


@Component({
    selector: 'search-block-component',
    templateUrl: 'search-block.component.html',
    styleUrls: ['search-block.component.scss']
})
export class SearchBlockComponent implements OnInit {

    private title: string;
    private searchField: string;

    /**
     * ASSIGNMENT 3.1
     * add another property called "searchResults" of type Array<any>
     * fill the property with an empty array in our constructor method
     * @example this.myArrayProperty = [];
     */

    constructor(
        /**
         * ASSIGNMENT 3.2
         * dependency inject the http service from angular
         * @example private http: Http
         */
    ) {
        this.title = "search block component";
    }

    private submit() {
        console.log("logging searchQuery: ", this.searchField);
        /**
         * ASSIGNMENT 3.4
         * when the submit method is called from the button click do the request we made in 3.3 so data is requested from the API
         *
         */
    }

    /**
     * ASSIGNMENT 3.3
     * now that we have the http service available in our component lets do a request with it
     * create a method that does the following request to the OMDB api provided by IMDB
     * populate the array we made in assignment 3.1 so the data is available in our template
     * @docs https://www.omdbapi.com/
     * @docs https://angular.io/docs/ts/latest/api/http/index/Http-class.html
     * @example request "http://www.omdbapi.com/?s=seven&y=&plot=short&r=json"
     * DO LOG WHAT YOU ARE DOING SO YOU CAN DEBUG THE DATA AND EXTRACT IT CORRECTLY
     */

    ngOnInit() {

    }

}
