import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieManagerSearchBlockComponent } from './components/moviemanager-search-block/moviemanager-search-block.component';
import { MoviemanagerMovieListComponent } from './components/moviemanager-movie-list/moviemanager-movie-list.component';
import { MoviemanagerMovieBucketComponent } from './components/moviemanager-movie-bucket/moviemanager-movie-bucket.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieManagerSearchBlockComponent,
    MoviemanagerMovieListComponent,
    MoviemanagerMovieBucketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
