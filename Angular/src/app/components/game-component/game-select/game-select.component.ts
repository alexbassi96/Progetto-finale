import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/@core/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-game-select',
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.scss']
})
export class GameSelectComponent implements OnInit {

  movies = this.movieService.movies;
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

  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
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
}
