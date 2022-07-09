import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() movie: Partial<Movie> = {};
  orderListMovie: Partial<Movie> [] = [];
  
  imageBaseUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"
  
  constructor() { }

  ngOnInit(): void {
    
  }

  /*addMovieToOrderList(){
    let select = document.getElementById('posizioneFilm');
    let value = 
    for(var i = 0, j = sel.options.length; i < j; ++i) {
        if(sel.options[i].innerHTML === val) {
           sel.selectedIndex = i;
           break;
        }
    }
  }*/
}

