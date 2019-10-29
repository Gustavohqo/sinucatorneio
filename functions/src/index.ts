import * as functions from 'firebase-functions';
import express from 'express';
import { Database } from './infra/Database';
import { router } from './router';
import { PlayerService } from './player/player.service';

const PORT = 4200;
const app = express();


Database.init(functions);
PlayerService.init();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use('/', router);

app.listen(PORT, () => {
    console.log("Server Startup at ", Date())
    console.log("Listening at port: ", PORT)
})

export const api = functions.https.onRequest(app);