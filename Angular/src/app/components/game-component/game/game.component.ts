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
  
  @Input() movie: Movie = {} as Movie;
  movies = this.movieService.movies;
  criterion : Criterion = {label: "", key: ''};
  convertedCriterion: number = 0;
  orderedMovies: Movie [] = [];

  ngOnInit(): void {
    for(let index = 0; index < 10; index++){
      this.movieService.getRandomMovie(index);
    }
  }

  startGame(){
    this.criterion = this.movieService.getRandomCriterion();
    console.log(this.criterion);

    switch(this.criterion.key){
      case 'release_date':
        this.convertedCriterion = parseInt(this.movie.release_date.substring(0, 4));
        console.log(this.convertedCriterion);
        break;
      case 'vote_average':
        this.convertedCriterion = this.movie.vote_average;
        console.log(this.convertedCriterion);
        break;
      case 'runtime':
        this.convertedCriterion = this.movie.runtime;
        console.log(this.convertedCriterion);
        break;
      case 'budget':
        this.convertedCriterion = this.movie.budget;
        console.log(this.convertedCriterion);
        break;
      case 'revenue':
      this.convertedCriterion = this.movie.revenue;
      console.log(this.convertedCriterion);
      break;
    }

    this.descendingOrder(this.movieService.movies);
    for(let i = 0; i < 10; i++){
      console.log(this.movieService.movies[i]);
    }
  }

  descendingOrder(movies: Partial<Movie>[] | undefined) {
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

