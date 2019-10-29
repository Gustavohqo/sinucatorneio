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
    
    static getPlayers() : any {
        return this.collection.get()
        .then((snapshot:any) => snapshot.docs.map((doc:any) => {
            let player:any = {};
            player['id'] = doc.id;
            player['name'] = doc.data().name;
            player['level'] = doc.data().level;
            player['nickname'] = doc.data().nickname;
            return player;
        }));
    }
}