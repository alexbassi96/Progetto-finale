import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@core/services/movie.service';
import { RankingService } from 'src/app/@core/services/ranking.service';
import { Criterion, Movie } from 'src/app/models/movie';
import { Ranking } from 'src/app/models/ranking';

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
  @Input() orderedMoviesByUser: Partial<Movie> [] = [];
  criterion : Criterion = {label: "", key: ''};
  currentUser = this.authService.getCurrentUser().id;
  //convertedCriterion: number = 0;
  //orderedMovies: Movie [] = [];

  ngOnInit(): void {
    for(let index = 0; index < 10; index++){
      this.movieService.getRandomMovie(index);
    }
    this.criterion = this.movieService.getRandomCriterion();
    console.log(this.criterion);
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

    /*for(let i = 0; i < 10; i++){
      this.orderedMovies.push(this.movieService.movies[i]);
    }*/
    for(let i = 0; i < 10; i++){
      console.log(this.movies[i]);
    }
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
    /*this.criterion = this.movieService.getRandomCriterion();
    console.log(this.criterion);*/

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
    /*this.criterion = this.movieService.getRandomCriterion();
    console.log(this.criterion);*/

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

  finish(form: NgForm){
    let points: number = 0;
    for(let i = 0; i < 10; i++){
      if(this.movies[i] === this.movies[i]){
        points = points + 10;
        }
      }
      this.rankingService.createRanking({userId: this.currentUser, gamePoints: points}).subscribe({
        next: (res) => {
        console.log(res);
    }
  });
}
}