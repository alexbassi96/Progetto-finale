import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/@core/services/movie.service';
import { Criterion, Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  
  movies = this.movieService.movies;
  movie: Partial<Movie> = {};
  criterion : Criterion = {label: "", key: ''};
  convertedCriterion: number = 0;
  orderedMovies: Movie [] = [];

  ngOnInit(): void {
    for(let index = 0; index < 10; index++){
      this.movieService.getRandomMovie(index);
    }
    }

  startGame(){
    /*switch(this.criterion.key){
      case 'release_date':
        this.movie.criterion = parseInt(this.movie.release_date.substring(0, 4));
        console.log(this.movie.criterion);
        break;
      case 'vote_average':
        this.movie.criterion = this.movie.vote_average;
        console.log(this.movie.criterion);
        break;
      case 'runtime':
        this.movie.criterion = this.movie.runtime;
        console.log(this.movie.criterion);
        break;
      case 'budget':
        this.movie.criterion = this.movie.budget;
        console.log(this.movie.criterion);
        break;
      case 'revenue':
      this.movie.criterion = this.movie.revenue;
      console.log(this.movie.criterion);
      break;
    }*/

    this.descendingOrder(this.movieService.movies);
    for(let i = 0; i < 10; i++){
      console.log(this.movieService.movies[i]);
    }
  }

  descendingOrder(movies: Partial<Movie>[] | undefined) {    
    this.criterion = this.movieService.getRandomCriterion();
    console.log(this.movie.criterion);

    /*switch(this.criterion.key){
      case 'release_date':
        this.criterion.key = this.movie.release_date;
        console.log(this.criterion.key);
        break;
      case 'vote_average':
        this.criterion.key = this.movie.vote_average.toLocaleString();
        console.log(this.criterion.key);
        break;
      case 'runtime':
        this.criterion.key = this.movie.runtime.toString();
        console.log(this.criterion.key);
        break;
      case 'budget':
        this.criterion.key = this.movie.budget.toString();
        console.log(this.criterion.key);
        break;
      case 'revenue':
        this.criterion.key = this.movie.revenue;
        console.log(this.criterion.key);
        break;
    }*/

    movies?.sort((a, b) => {
      if (a.release_date != undefined && b.release_date != undefined) {
        if (b.release_date > a.release_date) {
          return 1;
        }
        if (b.release_date < a.release_date) {
          return -1;
        }
        return 0;
      }
      else return 0;
    });
  }
}

