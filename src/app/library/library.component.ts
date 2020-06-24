import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Movie } from "../model/movie.model";
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  moviesList: any[] = [];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    console.log("[INITIALIZE] library-component");
    for (var key in localStorage) {
        if (key.startsWith('movie-')) {
          var keySplited = key.split('-');
          this.apiService.getMovieById(parseInt(keySplited[1]), true)
            .subscribe( data => {
                this.moviesList.push(data);
          });
        }
    }
  }
}