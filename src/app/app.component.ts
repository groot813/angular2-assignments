import { Component } from '@angular/core';
import {MovieService} from "./services/movie-service/movie-service.service";

@Component({
  selector: 'moviemanager-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [MovieService]
})
export class AppComponent {
  title = 'ASSIGNMENT 8: creating a router another routerPage containing a subscription form';
}
