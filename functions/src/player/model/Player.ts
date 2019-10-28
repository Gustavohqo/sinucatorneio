import { Level } from "./Level";

export class Player {
    id?:string;
    name: string;
    level: Level;
    nickname?: string;

    constructor(id:string, obj:any) {
        this.id = id;
        this.name = obj.name;
        this.level = obj.level;
        this.nickname = obj.nickname;
    }
}

