import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ListMovieComponent } from './list-movie/list-movie.component';

const routes: Routes = [
  { path: '', component : AppComponent },
  { path: 'filmes', component: ListMovieComponent },
];

export const Routing = RouterModule.forRoot(routes);
