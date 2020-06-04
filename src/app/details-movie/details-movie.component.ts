import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Movie } from "../model/movie.model";
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  id: number;
  currentMovie: Movie;
  moviesSimilar: Movie[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    // Alterar para busca de imóveis por ordem alfabética
    // Verificar se API suporta tal funcionalidade
    this.apiService.getMovieById(this.id)
      .subscribe( data => {
        this.currentMovie = data.result;
      });
  }

  getSimilarMovies(title: string): void {
    this.apiService.getSimilarMovies()
      .subscribe( data => {
        this.moviesSimilar = data.result
      })
  };
}