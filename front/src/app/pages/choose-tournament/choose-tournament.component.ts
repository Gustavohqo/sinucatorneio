import { Component, OnInit } from "@angular/core";
import { faHashtag, faSpinner } from "@fortawesome/free-solid-svg-icons";
import "rxjs/add/operator/debounceTime";
import { Subject } from "rxjs";

@Component({
  selector: "app-choose-tournament",
  templateUrl: "./choose-tournament.component.html",
  styleUrls: ["./choose-tournament.component.scss"]
})
export class ChooseTournamentComponent implements OnInit {
  faHashtag = faHashtag;
  faSpinner = faSpinner;

  tournamentCode: string;

  tournamentCodeSubject: Subject<string> = new Subject<string>();

  spinnerSubject: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.spinnerSubject.next(false);

    this.tournamentCodeSubject.debounceTime(1000).subscribe(n => {
      if( n.length === 8 ){
        this.spinnerSubject.next(true);
        setTimeout(() => {
          console.log(`Teste send ${n}`);
          this.spinnerSubject.next(false);
        }, 2000);
      }

    });

    this.tournamentCodeSubject
  }

  ngOnInit() {}

  tournamentCodeChange(event) {
    console.log(event);
    this.tournamentCodeSubject.next(event);
  }
}
