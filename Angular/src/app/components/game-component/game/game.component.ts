import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@core/services/movie.service';
import { RankingService } from 'src/app/@core/services/ranking.service';
import { Criterion, Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private movieService: MovieService, private rankingService: RankingService, private authService: AuthService) { }
  
  movies = this.movieService.movies;
  movie: Partial<Movie> = {};
  orderedMovies: Partial<Movie>[] = [];
  criterion : Criterion = {label: "", key: ''};
  currentUser = this.authService.getCurrentUser().id;
  orderedMoviesByUser : Partial<Movie>[] = [];
  primaPosizioneFilm: Partial<Movie> = {};
  secondaPosizioneFilm: Partial<Movie> = {};
  terzaPosizioneFilm: Partial<Movie> = {};
  quartaPosizioneFilm: Partial<Movie> = {};
  quintaPosizioneFilm: Partial<Movie> = {};
  sestaPosizioneFilm: Partial<Movie> = {};
  settimaPosizioneFilm: Partial<Movie> = {};
  ottavaPosizioneFilm: Partial<Movie> = {};
  nonaPosizioneFilm: Partial<Movie> = {};
  decimaPosizioneFilm: Partial<Movie> = {};
  game = false;
  results = false;

  //convertedCriterion: number = 0;

  ngOnInit(): void {
    for(let index = 0; index < 10; index++){
      this.movieService.getRandomMovie(index);
    }
    this.criterion = this.movieService.getRandomCriterion();
    console.log(this.criterion);
    }

  showGame(){
    this.game = !this.game;
  }

  showResults(){
    this.results = !this.results;
  }


  startGame(){
    switch(this.criterion.key){
      case 'release_date':
        this.descendingOrderReleaseDate();
        break;
      case 'vote_average':
        this.descendingOrderVoteAverage();
        break;
      case 'runtime':
        this.descendingOrderRuntime();
        break;
      case 'budget':
        this.descendingOrderBudget();
        break;
      case 'revenue':
        this.descendingOrderRevenue();
        break;
    }

    for(let i = 0; i < 10; i++){
      this.orderedMovies.push(this.movieService.movies[i]);
    }

    for(let i = 0; i < 10; i++){
      console.log(this.orderedMovies[i]);
    }
  }

  onSubmitMovie(form: NgForm){
    this.orderedMoviesByUser.push(this.primaPosizioneFilm);
    this.orderedMoviesByUser.push(this.secondaPosizioneFilm);
    this.orderedMoviesByUser.push(this.terzaPosizioneFilm);
    this.orderedMoviesByUser.push(this.quartaPosizioneFilm);
    this.orderedMoviesByUser.push(this.quintaPosizioneFilm);
    this.orderedMoviesByUser.push(this.sestaPosizioneFilm);
    this.orderedMoviesByUser.push(this.settimaPosizioneFilm);
    this.orderedMoviesByUser.push(this.ottavaPosizioneFilm);
    this.orderedMoviesByUser.push(this.nonaPosizioneFilm);
    this.orderedMoviesByUser.push(this.decimaPosizioneFilm);

    console.log(this.orderedMoviesByUser);
  }

  finish(form: NgForm){
    console.log(this.orderedMovies);
    console.log(this.orderedMoviesByUser);
    let points: number = 0;
    for(let i = 0; i < 10; i++){
      if(this.orderedMovies[i] == this.orderedMoviesByUser[i]){
        points = points + 10;
        }
      }
      this.rankingService.createRanking({userId: this.currentUser, gamePoints: points}).subscribe({
        next: (res) => {
        console.log(res);
      }
    });
  }

  descendingOrderReleaseDate() {    
    this.movies?.sort((a, b) => {
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

  descendingOrderVoteAverage() {
    this.movies?.sort((a, b) => {
      if (a.vote_average != undefined && b.vote_average != undefined) {
        if (b.vote_average > a.vote_average) {
          return 1;
        }
        if (b.vote_average < a.vote_average) {
          return -1;
        }
        return 0;
      }
      else return 0;
    });
  }

  descendingOrderRuntime() {    
    this.movies?.sort((a, b) => {
      if (a.runtime != undefined && b.runtime != undefined) {
        if (b.runtime > a.runtime) {
          return 1;
        }
        if (b.runtime < a.runtime) {
          return -1;
        }
        return 0;
      }
      else return 0;
    });
  }

  descendingOrderBudget() {    
    this.movies?.sort((a, b) => {
      if (a.budget != undefined && b.budget != undefined) {
        if (b.budget > a.budget) {
          return 1;
        }
        if (b.budget < a.budget) {
          return -1;
        }
        return 0;
      }
      else return 0;
    });
  }

  descendingOrderRevenue() {
    this.movies?.sort((a, b) => {
      if (a.revenue != undefined && b.revenue != undefined) {
        if (b.revenue > a.revenue) {
          return 1;
        }
        if (b.revenue < a.revenue) {
          return -1;
        }
        return 0;
      }
      else return 0;
    });
  }
}