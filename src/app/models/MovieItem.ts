import {IMovieItem} from "../interfaces/IMovieItem";


export class MovieItem implements IMovieItem {
    private _title: string;
    private _year: string;
    private _id: string;
    private _type: string;
    private _imageUrl: string;

    constructor(title: string, year: string, id: string, type: string, imageUrl: string) {
        this._title = title;
        this._year = year;
        this._id = id;
        this._type = type;
        this._imageUrl = imageUrl;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get year(): string {
        return this._year;
    }

    set year(value: string) {
        this._year = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }

}
