import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./service/api.service";
import { HttpClientModule } from "@angular/common/http";
import { ListMovieComponent } from './list-movie/list-movie.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { DetailsPersonComponent } from './details-person/details-person.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMovieComponent,
    DetailsMovieComponent,
    ListPersonComponent,
    DetailsPersonComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
