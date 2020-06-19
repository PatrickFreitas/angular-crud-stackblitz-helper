import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { HomeComponent } from './home/home.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'filmes', component: ListMovieComponent },
  { path: 'detalhes/:id', component: DetailsMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
