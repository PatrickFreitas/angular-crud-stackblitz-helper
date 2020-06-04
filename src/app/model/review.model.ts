import { Movie } from "./movie.model";

export class RootObject {
  id: string;
  author: string;
  content: string;
  iso_639_1: string;
  movie: Movie;
  url: string;
}
