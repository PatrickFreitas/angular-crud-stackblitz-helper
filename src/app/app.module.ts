import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./service/api.service";
import { HttpClientModule } from "@angular/common/http";
import { ListMovieComponent } from './list-movie/list-movie.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { DetailsPersonComponent } from './details-person/details-person.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMovieComponent,
    DetailsMovieComponent,
    ListPersonComponent,
    DetailsPersonComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
