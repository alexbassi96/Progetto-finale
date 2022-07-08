import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/@core/services/movie.service';

@Component({
  selector: 'tnv-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies = this.movieService.movies;

  ngOnInit(): void {
  }

}
