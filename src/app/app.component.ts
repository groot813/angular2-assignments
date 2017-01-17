import { Component } from '@angular/core';
import {MovieService} from "./services/movie-service/movie-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [MovieService]
})
export class AppComponent {
  title = 'ASSIGNMENT 6: Till now we have been using the data as is from the OMDB api. this is an open assignment to model and stucture our data (create models, factories to structure and blueprint our data). results will be presented ;)';
}
