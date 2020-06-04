import { Movie } from './movie.model';

export class Person {
  profile_path: string;
  adult: boolean;
  id: number;
  known_for: Movie[];
  name: string;
  popularity: number;
}