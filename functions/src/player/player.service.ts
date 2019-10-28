import { Player } from "./model/Player";
import { Database } from "../infra/Database";

export class PlayerService {
    static collection:any;

    static init():void {
        this.collection = Database.getCollection('players');
    }

    static addPlayer(newPlayer:Player) : Player {
        return this.collection.add(newPlayer)
        .then((ref:any) => ref.get())
        .then((doc:any) => doc.data() as Player);
    }
    
    static getPlayers() : Player {
        return this.collection.get()
        .then((snapshot:any) => snapshot.docs.map((doc:any) => new Player(doc.id, doc.data())));
    }
}