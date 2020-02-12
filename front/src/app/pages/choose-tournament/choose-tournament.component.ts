import { Component, OnInit } from "@angular/core";
import {
  faHashtag,
  faSpinner,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import "rxjs/add/operator/debounceTime";
import { Subject } from "rxjs";
import { TournamentService } from "src/app/service/tournament.service";

@Component({
  selector: "app-choose-tournament",
  templateUrl: "./choose-tournament.component.html",
  styleUrls: ["./choose-tournament.component.scss"]
})
export class ChooseTournamentComponent implements OnInit {
  faHashtag = faHashtag;
  faSpinner = faSpinner;
  faCheck = faCheck;
  faTimes = faTimes;

  tournamentCode: string;

  tournamentCodeSubject: Subject<string> = new Subject<string>();

  spinnerSubject: Subject<boolean> = new Subject<boolean>();
  successIconSubject: Subject<boolean> = new Subject<boolean>();
  failIconSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private tournamentService: TournamentService) {
    this.initStates();

    this.tournamentCodeSubject.debounceTime(1000).subscribe(code => {
      if (code.length === 8) {
        this.spinnerSubject.next(true);

        this.tournamentService.find(code).subscribe(
          result => {
            setTimeout(() => {
              this.spinnerSubject.next(false);
              this.successIconSubject.next(true);
            }, 1000);
          },
          error => {
            this.failIconSubject.next(true);
          }
        );
      }

      this.initStates();
    });
  }

  ngOnInit() {}

  initStates() {
    this.spinnerSubject.next(false);
    this.successIconSubject.next(false);
    this.failIconSubject.next(false);
  }

  tournamentCodeChange(event) {
    this.tournamentCodeSubject.next(event);
    this.initStates();
  }
}
