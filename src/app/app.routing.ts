import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListMovieComponent } from './list-movie/list-movie.component';

const routes: Routes = [
  { path : '', component : AppComponent },
  { path: 'list-movie', component: ListMovieComponent }
];

export const Routing = RouterModule.forRoot(routes);
