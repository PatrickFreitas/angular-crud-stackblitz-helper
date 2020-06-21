import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from "../model/movie.model";
import { Person } from "../model/person.model";
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  id: number;
  movie: Movie;
  persons: Person[];
  moviesSimilar: Movie[];
  isFav: boolean;
  isUnfav: boolean;

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
    console.log("[INITIALIZE] details-movie-component");
    this.id = this.route.snapshot.params.id;
    
    // Alterar para busca de imóveis por ordem alfabética
    // Verificar se API suporta tal funcionalidade
    this.apiService.getMovieById(this.id, true)
      .subscribe( data => {
        this.movie = data;
        if(this.movie.overview == "")
          this.apiService.getMovieById(this.id, false)
            .subscribe( data => {
              this.movie = data;
            });

        if(localStorage.getItem(this.movie.id.toString()) == 'true')
          this.isFav = true;
        if(localStorage.getItem(this.movie.id.toString()) == 'false')
          this.isUnfav = true;
          
        this.apiService.getPersonsByMovie(this.movie)
            .subscribe( data => {
              this.persons = data.cast;
            });
      });
  }

  getSimilarMovies(title: string): void {
    this.apiService.getSimilarMovies()
      .subscribe( data => {
        this.moviesSimilar = data.result
      })
  };

  favClick() : void {
    this.isUnfav = false;
    
    if(localStorage.getItem(this.movie.id.toString()) == 'true') {
      localStorage.removeItem(this.movie.id.toString())
      this.isFav = false;
    } else {
      localStorage.setItem(this.movie.id.toString(), 'true');
      this.isFav = true;
    }
  }
  
  notFavClick() : void {
    this.isFav = false;
    
    if(localStorage.getItem(this.movie.id.toString()) == 'false') {
      localStorage.removeItem(this.movie.id.toString())
      this.isUnfav = false;
    } else {
      localStorage.setItem(this.movie.id.toString(), 'false');
      this.isUnfav = true;
    }
  }
}