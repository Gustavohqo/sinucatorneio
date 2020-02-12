import { Router } from "express";
import { playerRoute } from "./player/player.router";
import { duoRouter } from "./duo/duo.router";
import { tournamentRouter } from "./tournament/tournament.router";

const router = Router();

router.use('/player', playerRoute)
router.use('/duo', duoRouter)
router.use('/tournament', tournamentRouter)

export {router};