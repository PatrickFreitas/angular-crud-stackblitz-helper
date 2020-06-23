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

  title: string;
  moviesList: any[] = [];
  pageQuantity: number;
  currentPage: number = 1;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  
  searchMovie(title: string): void {
    this.moviesList = [];
    this.title = title;
    this.pushPagePopularMovies(1);
  };
  
  pushPagePopularMovies(page: number) {
    console.log("searching-movie " + this.title);
    this.apiService.searchByTitle(this.title, page)
      .subscribe( data => {
        this.currentPage = data.page;
        this.pageQuantity = data.total_pages;
        data.results.forEach(item => {
          this.moviesList.push(item);
        })
      })
  }
  
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if ($event.target.scrollingElement.clientHeight + $event.target.scrollingElement.scrollTop >= $event.target.scrollingElement.scrollHeight) {
      this.pushPagePopularMovies(this.currentPage + 1);
    }
  } 
}