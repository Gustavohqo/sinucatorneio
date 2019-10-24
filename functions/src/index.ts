import * as functions from 'firebase-functions';
import * as firebaseAdmin from 'firebase-admin';
import express from 'express';
// import serviceAccount from '../sinucatorneioapp-account.json'

const PORT = 4200;
const app = express();
// firebaseAdmin.initializeApp(functions.config().firebase);
firebaseAdmin.initializeApp({ 
    credential: firebaseAdmin.credential.applicationDefault(), 
    databaseURL: 'sinucatorneioapp.firebaseio.com'
});
const db = firebaseAdmin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.get('/player', (req, res) => {
    db.collection('players').get().then(
        snapshot => res.send(snapshot.docs.map(doc => doc.data()))
    )
});

app.post('/player', (req, res) => {
    let player = req.body;
    db.collection('players').add(
        player
    )
    .then(ref => ref.get().then(doc => res.send(doc.data())))
    .catch( err => res.status(400).send(err));
});


app.listen(PORT, () => {
    console.log("Server Startup at ", Date())
    console.log("Listening at port: ", PORT)
})

export const api = functions.https.onRequest(app);

