import { Router } from "express";
import { PlayerService } from "../player/player.service";
import { Level } from "../player/model/Level";
import { Player } from "../player/model/Player";

const duoRouter = Router();
let duos : any[] = [];

const drawDuos = (players:any) => {
    duos = [];
    let baianinhoPlayers = randomizeGroup(players.filter((p:Player) =>   p.level == Level.BAIANINHO));
    let quebraGalhoPlayers = randomizeGroup(players.filter((p:Player) =>   p.level == Level.QUEBRA_GALHO));
    let samuelPlayers = randomizeGroup(players.filter((p:Player) =>   p.level == Level.SAMUEL));

    let spare : any[] = [];
    if (baianinhoPlayers.length !== 0 && baianinhoPlayers.length === samuelPlayers.length) {
        draw(baianinhoPlayers, samuelPlayers, duos);
    }
    else if(baianinhoPlayers.length < samuelPlayers.length){
        let spareNumber = samuelPlayers.length - baianinhoPlayers.length;
        draw(samuelPlayers.slice(0, baianinhoPlayers.length), baianinhoPlayers, duos);
        spare.push(... samuelPlayers.slice(-spareNumber))
    }
    else {
        let spareNumber = baianinhoPlayers.length - samuelPlayers.length;
        draw(samuelPlayers.slice(0, samuelPlayers.length), samuelPlayers, duos);
        spare.push(... baianinhoPlayers.slice(-spareNumber))
    }

    quebraGalhoPlayers.push(...spare);
    if (quebraGalhoPlayers.length % 2 === 0 ) {
        let midpoint = quebraGalhoPlayers.length / 2;
        draw(quebraGalhoPlayers.slice(0, midpoint), quebraGalhoPlayers.slice(-midpoint), duos)
    }
    else {
        let midpoint = Math.floor(quebraGalhoPlayers.length / 2);
        draw(quebraGalhoPlayers.slice(0, midpoint), quebraGalhoPlayers.slice(-midpoint - 1), duos)
    }

    return duos;
}

duoRouter.get('/', async (req, res) => {
    let players = await PlayerService.getPlayers();
    
    if(req.query.redo || duos.length === 0 ) {
        res.send(drawDuos(players));
    } else {
        res.send(duos);
    }
});

export { duoRouter };

function draw(listOne: any, listTwo: any, duos: any[]) {
    while (listTwo.length > 0 ) {
        const playerOne = listOne.pop();
        const playerTwo = listTwo.pop();
        duos.push({ playerOne, playerTwo, phase: "", group: "" });
    }
}
function randomizeGroup(group: any): any {
    return group.slice(0).sort(() => Math.random() - 0.5);
}

