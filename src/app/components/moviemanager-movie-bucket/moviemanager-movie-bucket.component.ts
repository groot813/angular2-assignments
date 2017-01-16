import {Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'moviemanager-movie-bucket',
    templateUrl: './moviemanager-movie-bucket.component.html',
    styleUrls: ['./moviemanager-movie-bucket.component.css']
})
export class MoviemanagerMovieBucketComponent implements OnInit {

    /**
     * ASSIGNMENT 7.1
     * set an input for the movie-bucket component using Angulars @Input() decorator
     * @example @Input() public bucketItems: Array<IMovieItem>;
     * this @Input decorator will create a setter for your property to be accessed like the example below
     * @example <moviemanager-movie-bucket [bucketItems]="myMovieItems"></moviemanager-movie-bucket>
     */

    /**
     * ASSIGNMENT 7.4
     * also ad an output for the component and put each clicked bucketItem in
     * it to let out parent component know we deleted an item from out bucket
     * do this with the output decorator and Outputting a callback EventEmitter
     * @example @Output() public callBackOnClick = new EventEmitter();
     * to initiate our output we can do the following
     * this.myOutput.emit(clickedItem)
     * our @Output property is injected in out component like so
     * @example <moviemanager-movie-bucket (bucketItems)="myMovieItems"></moviemanager-movie-bucket>
     */

    constructor() {
    }

    ngOnInit() {
    }


}
