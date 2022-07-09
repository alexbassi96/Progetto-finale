import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ranking } from 'src/app/models/ranking';


@Injectable({
  providedIn: 'root'
})
export class RankingService {

  nodeBaseUrl: String = "http://localhost:1234/api"

  constructor(private httpClient: HttpClient) { }

  getRanking(userId: number){
    return this.httpClient.get<Ranking>(`${this.nodeBaseUrl}/ranking/${userId}`);
  }

  createRanking(ranking: Partial<Ranking>){
    return this.httpClient.post<Ranking>(`${this.nodeBaseUrl}/ranking`, ranking); 
  }
}

