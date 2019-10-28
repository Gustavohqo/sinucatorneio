import { Router } from "express";
import { playerRoute } from "./player/player.router";
import { duoRouter } from "./duo/duo.router";

const router = Router();

router.use('/player', playerRoute)
router.use('/duo', duoRouter)

export {router};