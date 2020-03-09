import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TournamentService {
  private path = "tournament";
  private tournament : any;

  constructor(private api: ApiService) {}

  find(code): Observable<any> {
    return this.api.get(`${this.path}?code=${code}`);
  }

  storeTournament(tournament) {
    this.tournament = tournament;
  }

  getTournamentFromStore() {
    return this.tournament;
  }

}
