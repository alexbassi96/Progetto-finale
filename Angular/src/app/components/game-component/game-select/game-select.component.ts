import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MovieService } from 'src/app/@core/services/movie.service';
import { Criterion, Movie } from 'src/app/models/movie';


@Component({
  selector: 'tnv-game-select',
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.scss']
})
export class GameSelectComponent implements OnInit {
  criterion : Criterion = {label: "", key: ''};
  movies = this.movieService.movies;
  movie: Partial<Movie> = {};
  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void { 
    for(let index = 0; index < 10; index++){
      this.movieService.getRandomMovie(index);
    }
    this.criterion = this.movieService.getRandomCriterion();
    console.log(this.criterion.key);
  }
  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
