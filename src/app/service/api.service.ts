import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gender } from "../model/gender.model";
import { Movie } from "../model/movie.model";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  //eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWVlMDA3Yzc4YmQ3MGMxN2Q4NGQ5NTNlMDQ2OThmMCIsInN1YiI6IjVlZDkwNjNjMWIxNTdkMDAxZjViZGJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RDZmezzx-tmQ-5bVRX88WvOk1yLZAEQBTABHziIrK7M
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '?api_key=f9ee007c78bd70c17d84d953e04698f0';
  languageConfig: string = '&language=pt-BR';

  getLastestMovies() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'movie/latest' + this.apiKey);
  }

  getPopularMovies(page: number) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'movie/popular' + this.apiKey + this.languageConfig + '&page=' + page);
  }

  getMovieById(id: number, useLanguageConfig : boolean): Observable<ApiResponse> {
    if(useLanguageConfig)
      return this.http.get<ApiResponse>(this.baseUrl + 'movie/' + id + this.apiKey + this.languageConfig);
    else
      return this.http.get<ApiResponse>(this.baseUrl + 'movie/' + id + this.apiKey);
  }

  getMovieByGender(gender: Gender): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'movie/' + gender.id + this.apiKey);
  }

  getGenders(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'genre/movie/list' + this.apiKey);
  }

  getSimilarMovies(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'movie/{movie_id}/similar' + this.apiKey);
  }

  getPersonsByMovie(movie: Movie): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'movie/' + movie.id + '/credits' + this.apiKey);
  }
  
  searchByTitle(title: string, page: number): Observable<ApiResponse> {
    if(title != null && title != "")
      return this.http.get<ApiResponse>(this.baseUrl + 'search/movie' + this.apiKey + '&query=' + title + '&page=' + page);
    else
      return null;
  }
}
