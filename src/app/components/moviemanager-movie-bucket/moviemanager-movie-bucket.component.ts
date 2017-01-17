import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IMovieItem} from "../../interfaces/IMovieItem";


@Component({
    selector: 'moviemanager-movie-bucket',
    templateUrl: './moviemanager-movie-bucket.component.html',
    styleUrls: ['./moviemanager-movie-bucket.component.css']
})
export class MoviemanagerMovieBucketComponent implements OnInit {

    @Input() public bucketItems: Array<IMovieItem>;
    @Output() public callBackOnClick = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public emitItem(item: IMovieItem, index: string) {
        this.bucketItems.splice(parseInt(index), 1);
        this.callBackOnClick.emit(item);
    }

}
