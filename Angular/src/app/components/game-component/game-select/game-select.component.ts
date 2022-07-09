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
  orderedMovies : Movie[] = [];
  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    form.value['primaPosizioneFilm'] = this.orderedMovies[0];
    form.value['secondaPosizioneFilm'] = this.orderedMovies[1];
    form.value['terzaPosizioneFilm'] = this.orderedMovies[2];
    form.value['quartaPosizioneFilm'] = this.orderedMovies[3];

    this.orderedMovies.push(this.orderedMovies[0]);
    this.orderedMovies.push(this.orderedMovies[1]);
    this.orderedMovies.push(this.orderedMovies[2]);
    this.orderedMovies.push(this.orderedMovies[3]);
    console.log(this.orderedMovies);
  }
}
