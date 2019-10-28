import { Router } from "express";
import { Level } from "./model/Level";
import { Player } from "./model/Player";
import { PlayerService } from "./player.service";

const playerRoute = Router();



playerRoute.get('/', async (req:any, res:any)=> {
    res.send( await PlayerService.getPlayers());
});

playerRoute.get('/level', (req: any, res:any) => res.send(Object.values(Level)));

playerRoute.post('/', async (req:any, res:any) => {
    let newPlayer = req.body as Player;
    let player:Player = await PlayerService.addPlayer(newPlayer)
    res.send(player);
});

export {playerRoute};