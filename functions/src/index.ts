import * as functions from 'firebase-functions';
import express from 'express';
import { DatabaseService } from './services/DatabaseService';


const PORT = 4200;
const app = express();
// firebaseAdmin.initializeApp(functions.config().firebase);

DatabaseService.init();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.get('/player', (req, res) => {
    DatabaseService.getCollection('players').get().then(
        (snapshot :any) => res.send(snapshot.docs.map((doc:any) => doc.data()))
    )
});

app.post('/player', (req, res) => {
    let player = req.body;
    DatabaseService.getCollection('players').add(
        player
    )
    .then((ref:any) => ref.get().then((doc:any) => res.send(doc.data())))
    .catch( (err:any) => res.status(400).send(err));
});


app.listen(PORT, () => {
    console.log("Server Startup at ", Date())
    console.log("Listening at port: ", PORT)
})

export const api = functions.https.onRequest(app);

