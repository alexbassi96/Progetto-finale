import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/@core/services/ranking.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  users: Partial<User> [] = [];

  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingService.getRanking().subscribe({
      next: (res) => {
      console.log(res);
  }
});
  }


}
