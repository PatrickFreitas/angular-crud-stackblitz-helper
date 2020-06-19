import { Component, OnInit , Inject} from '@angular/core';
import { Router } from "@angular/router";
import { Movie } from "../model/movie.model";
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  moviesList: any[] = [];
  pageQuantity: number;
  currentPage: number;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    console.log("[INITIALIZE] list-movie-component");
    // Alterar para busca de imóveis por ordem alfabética
    // Verificar se API suporta tal funcionalidade
    this.apiService.getPopularMovies()
      .subscribe( data => {
        this.currentPage = data.page;
        this.pageQuantity = data.total_pages;
        data.results.forEach(item => {
          this.moviesList.push(item);
        })
      });
  }

  searchMovie(title: string): void {
    this.apiService.getLastestMovies()
      .subscribe( data => {
        this.moviesList = this.moviesList.filter(u => u.title == title);
      })
  };
}
