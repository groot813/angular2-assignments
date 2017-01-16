import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {MovieDataStoreService} from "../movie-data-store/movie-data-store.service";

@Injectable()
export class MovieService extends MovieDataStoreService {

    constructor(private http: Http) {
        super();
    }

    public getData(searchQuery: string) {
        let params = new URLSearchParams();

        params.append("s", searchQuery);
        params.append("plot", "short");
        params.append("r", "json");

        return this.http.get("http://www.omdbapi.com/", {search: params})
            .map(res => res.json())
            .subscribe((data) => {
                this.setData(data);
            });
    }

}
