import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import {
  faTrophy,
  faMedal,
  faAward
} from "@fortawesome/free-solid-svg-icons";
import { TournamentService } from "src/app/service/tournament.service";

@Component({
  selector: "app-tournament",
  templateUrl: "./tournament.component.html",
  styleUrls: ["./tournament.component.scss"]
})
export class TournamentComponent implements OnInit {
  faTrophy = faTrophy;
  faMedal = faMedal;
  faAward = faAward;

  tournament;

  nivelBaixoIsSelected: Boolean = false;
  nivelMedioIsSelected: Boolean = false;
  nivelAltoIsSelected: Boolean = false;

  playerName: string;

  constructor(
    private tournamentService: TournamentService,
    private location: Location
  ) {
    this.tournament = this.location.getState();
    this.tournament = this.tournamentService.getTournamentFromStore();
    if (!Boolean(this.tournament)) {
      this.tournament = {
        code: "11AA22BB",
        name: "[MOCK] 1 Torneio de Sinuca Siteware",
        estilo: "DUO",
        participantes: [
          { name: "Buxin", level: "MEDIO" },
          { name: "Crazy", level: "MEDIO" },
          { name: "Iarly", level: "MEDIO" },
          { name: "Band", level: "ALTO" },
          { name: "Ladeira", level: "MEDIO" },
          { name: "Evy", level: "ALTO" },
          { name: "Jean", level: "BAIXO" },
          { name: "Samuel", level: "BAIXO" }
        ],
        status: "REGISTERING"
      };
    }

    console.log(this.tournament);
  }

  ngOnInit() {}

  addPlayer() {
    console.log(this.playerName);
    this.tournament.participantes.push({ name: this.playerName, level: this.wichNivelIsSelected() });
    this.resetForms();
  }

  onClick(id) {
    switch (id) {
      case "nivel-baixo":
        this.nivelBaixoIsSelected = !this.nivelBaixoIsSelected;
        this.nivelMedioIsSelected = false;
        this.nivelAltoIsSelected = false;
        break;
      case "nivel-medio":
        this.nivelBaixoIsSelected = false;
        this.nivelMedioIsSelected = !this.nivelMedioIsSelected;
        this.nivelAltoIsSelected = false;
        break;
      case "nivel-alto":
        this.nivelBaixoIsSelected = false;
        this.nivelMedioIsSelected = false;
        this.nivelAltoIsSelected = !this.nivelAltoIsSelected;
        break;
      default:
        this.nivelBaixoIsSelected = false;
        this.nivelMedioIsSelected = false;
        this.nivelAltoIsSelected = false;
    }

    const buttonElement = document.getElementById("register-button");

    if (this.isNivelSelected()) {
      buttonElement.removeAttribute("disabled");
    } else {
      buttonElement.setAttribute("disabled", undefined);
    }
  }

  getNivelClass(participante) : string {
    let nivelClass = ""
    switch(participante.level) {
      case("BAIXO") :
        nivelClass = "faTrophy"
        break;
      case("MEDIO") :
      case("ALTO") :

    }
    console.log(nivelClass);
    return nivelClass;
  }

  private isNivelSelected(): Boolean {
    return (
      this.nivelBaixoIsSelected ||
      this.nivelMedioIsSelected ||
      this.nivelAltoIsSelected
    );
  }

  private wichNivelIsSelected() : string {
    let nivel = "";

    if(this.nivelBaixoIsSelected) {
      nivel = "BAIXO";
    }
    else if(this.nivelMedioIsSelected) {
      nivel = "MEDIO";
    }
    else if(this.nivelAltoIsSelected) {
      nivel = "ALTO";
    }
    
    return nivel;
  }

  private resetForms() {
    this.playerName = undefined;
    this.nivelBaixoIsSelected = false;
    this.nivelMedioIsSelected = false;
    this.nivelAltoIsSelected = false;
  }
}
