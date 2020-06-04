import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./service/api.service";
import { HttpClientModule } from "@angular/common/http";
import { ListMovieComponent } from './list-movie/list-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMovieComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
