import { Component, OnInit, HostListener  } from '@angular/core';
import { Router } from "@angular/router";
import { Movie } from "../model/movie.model";
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  title: string = "";
  moviesList: any[] = [];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  
  searchMovie(title: string): void {
    this.apiService.searchByTitle(this.title)
      .subscribe( data => {
        this.moviesList = data;
      })
  };
}