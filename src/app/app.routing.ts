import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'detalhes/:id', component: DetailsMovieComponent },
  { path: 'buscar', component: SearchMovieComponent },
  { path: 'biblioteca', component: LibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
