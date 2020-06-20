import { Component, OnInit, HostListener  } from '@angular/core';
import { Router } from "@angular/router";
import { Movie } from "../model/movie.model";
import { ApiService } from "../service/api.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  moviesList: any[] = [];
  pageQuantity: number;
  currentPage: number = 1;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    console.log("[INITIALIZE] home-component");
    this.pushPagePopularMovies(1);
  }

  searchMovie(title: string): void {
    this.apiService.getLastestMovies()
      .subscribe( data => {
        this.moviesList = this.moviesList.filter(u => u.title == title);
      })
  };

  pushPagePopularMovies(page: number) {
    this.apiService.getPopularMovies(page)
      .subscribe( data => {
        this.currentPage = data.page;
        this.pageQuantity = data.total_pages;
        data.results.forEach(item => {
          this.moviesList.push(item);
        })
    });
  }
  
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    if ($event.target.scrollingElement.clientHeight + $event.target.scrollingElement.scrollTop >= $event.target.scrollingElement.scrollHeight) {
      this.pushPagePopularMovies(this.currentPage + 1);
    }
  } 
}