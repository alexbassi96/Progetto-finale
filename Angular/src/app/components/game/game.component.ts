import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../models/movie';

@Component({
  selector: 'tnv-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class RandomComponent implements OnInit {

  movie: Movie = {} as Movie;
  index_movies = 9;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRandomMovie();
  }

  getRandomMovie() {
    // Per determinare questo valore facciamo eventualmente una query su movies/latest per avere l'id dell'ultimo Film inserito su TMDB
    const latestId = 30000;
    const randomId = Math.round(Math.random() * latestId);

    for (let i = 0; i < this.index_movies; i++){
      this.http
        .get(
          `https://api.themoviedb.org/3/movie/${randomId}?api_key=30f19618cdb7bc8cd3529c739a1455e1a&language=it-it`
        )
        .subscribe({
          // Qui non usate any ovviamente, ma create l'interfaccia typescript per la response
          next: (res: any) => {
            console.log('ID trovato', randomId);
            if (res.poster_path) {
              this.movie = res;
            } else {
              console.log('Film senza poster');
              this.getRandomMovie();
            }
          },
          error: () => {
            console.log('ID non esistente, retry!', randomId);
            this.getRandomMovie();
          },
        });
      }
  }

}