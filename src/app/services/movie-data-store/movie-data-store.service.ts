import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

/**
 * ASSIGNMENT 5.1: rxjs observable study
 * we created an observable store for you for the sake of keeping the training simple
 * rxjs is a complex library if you havent ever used a reactive programming library
 * just reed the comments below, this should be enough for now
 */
@Injectable()
export abstract class MovieDataStoreService {

    constructor () {}

    /**
     * creates a new Subject, this is a type of observable with some extra features
     * @type {Subject}
     * @private
     */
    private _OmdbData = new Subject();

    /**
     * next to the subject we als want to return the regular observable so we can subscribe to it
     * @type {"../../Observable".Observable<T>}
     */
    public OmdbData$ = this._OmdbData.asObservable();

    /**
     * saves a new data object in the observable property OmdbData
     * @param data
     */
    protected setData(data: any) {
        // next calles the observable to broadcast to all its subscribers
        this._OmdbData.next(data);
    }

    /**
     * method to reset the data to null
     */
    protected resetResults() {
        this._OmdbData.next(null);
    }

}
