import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from 'src/app/models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  dotnetBaseUrl : string = "https://localhost:7024/api/review"

  constructor(private httpClient: HttpClient) { }

  addReview(review: Review){
    return this.httpClient.post<Review>("https://localhost:7024/api/review", review); 
  }
}
