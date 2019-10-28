import * as firebaseAdmin from 'firebase-admin';

export class Database {
    static db:any; 

    static init(functions:any) : void {

        if(!Boolean(this.db)){
            firebaseAdmin.initializeApp(functions.config().firebase);
            /* firebaseAdmin.initializeApp({ 
                credential: firebaseAdmin.credential.applicationDefault(), 
                databaseURL: 'sinucatorneioapp.firebaseio.com'
            }); */
            this.db = firebaseAdmin.firestore();
        }
    }

    static getCollection(name:string) {
        return this.db.collection(name);
    }
};