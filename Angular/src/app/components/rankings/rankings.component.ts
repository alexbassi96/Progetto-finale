import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/@core/services/ranking.service';
import { Ranking } from 'src/app/models/ranking';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  users: Partial<User> [] = [];
  rankings: Partial<Ranking> [] = [];
  bestRanking: Partial<Ranking> [] = [];

  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingService.getRanking().subscribe({
      next: (res) => {
      this.rankings = res;
      console.log(res);
  }
});
  }

  descendingOrderRankings() {
    //this.rankingService.getRanking();    
    /*this.criterion = this.movieService.getRandomCriterion();
    console.log(this.criterion);*/
      this.rankings?.sort((a, b) => {
      if (a.gamePoints != undefined && b.gamePoints != undefined) {
        if (b.gamePoints > a.gamePoints) {
          return 1;
        }
        if (b.gamePoints < a.gamePoints) {
          return -1;
        }
        return 0;
      }
      else return 0;
    });

    for(let i = 0; i < 10; ++i){
      this.rankings.push(this.bestRanking[i]);
    }
  }


}
