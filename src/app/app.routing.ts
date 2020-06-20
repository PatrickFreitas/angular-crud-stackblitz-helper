import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'detalhes/:id', component: DetailsMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
