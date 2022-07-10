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
  currentMovie: Partial<Movie> = {};
  /*primaPosizioneFilm: Partial<Movie> = {};
  secondaPosizioneFilm: Partial<Movie> = {};
  terzaPosizioneFilm: Partial<Movie> = {};
  quartaPosizioneFilm: Partial<Movie> = {};
  quintaPosizioneFilm: Partial<Movie> = {};
  sestaPosizioneFilm: Partial<Movie> = {};
  settimaPosizioneFilm: Partial<Movie> = {};
  ottavaPosizioneFilm: Partial<Movie> = {};
  nonaPosizioneFilm: Partial<Movie> = {};
  decimaPosizioneFilm: Partial<Movie> = {};*/

  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  onSubmitMovie(form: NgForm){
    console.log(form.value);
    form.value['primaPosizioneFilm'] = this.orderedMoviesByUser[0];
    this.orderedMoviesByUser.push(this.orderedMoviesByUser[0]);
    /*form.value['secondaPosizioneFilm'] = this.orderedMovies[1];
    form.value['terzaPosizioneFilm'] = this.orderedMovies[2];
    form.value['quartaPosizioneFilm'] = this.orderedMovies[3];
    form.value['quintaPosizioneFilm'] = this.orderedMovies[4]
    form.value['sestaPosizioneFilm'] = this.orderedMovies[5];
    form.value['settimaPosizioneFilm'] = this.orderedMovies[6];
    form.value['ottavaPosizioneFilm'] = this.orderedMovies[7];
    form.value['nonaPosizioneFilm'] = this.orderedMovies[8];
    form.value['decimaPosizioneFilm'] = this.orderedMovies[9];

    this.orderedMovies.push(this.orderedMovies[0]);
    this.orderedMovies.push(this.orderedMovies[1]);
    this.orderedMovies.push(this.orderedMovies[2]);
    this.orderedMovies.push(this.orderedMovies[3]);
    this.orderedMovies.push(this.orderedMovies[4]);
    this.orderedMovies.push(this.orderedMovies[5]);
    this.orderedMovies.push(this.orderedMovies[6]);
    this.orderedMovies.push(this.orderedMovies[7]);
    this.orderedMovies.push(this.orderedMovies[8]);
    this.orderedMovies.push(this.orderedMovies[9]);*/
    console.log(this.orderedMoviesByUser[0]);
  }
}
