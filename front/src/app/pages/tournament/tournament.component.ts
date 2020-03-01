import { Component, OnInit, Input } from '@angular/core';
import { TournamentService } from 'src/app/service/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  tournament;

  constructor(private tournamentService : TournamentService) {
    // this.tournament = this.tournamentService.getTournamentFromStore();
    this.tournament = {
      code: "11AA22BB",
      name: "1 Torneio de Sinuca Siteware",
      estilo: "DUO",
      participantes: [
        "Buxin",
        "Crazy",
        "Iarly",
        "Band",
        "Ladeira",
        "Evy",
        "Jean",
        "Samuel"
      ],
      status: "REGISTERING"
    };
    
    console.log(this.tournament);
   }

  ngOnInit() {
  }

}
