import * as firebaseAdmin from 'firebase-admin';

export class DatabaseService {
    static db:any; 

    static init() : void {
        if(!Boolean(this.db)){
            firebaseAdmin.initializeApp({ 
                credential: firebaseAdmin.credential.applicationDefault(), 
                databaseURL: 'sinucatorneioapp.firebaseio.com'
            });
            this.db = firebaseAdmin.firestore();
        }
    }

    static getCollection(name:string) {
        return this.db.collection(name);
    }
};