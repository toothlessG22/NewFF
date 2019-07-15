export class LiveGameScore {
    private positions: Map<string, Position>;

    private team1: Team;
    private team2: Team;

    constructor(positions: Map<string, Position>, team1: Team, team2: Team) {
        this.positions = positions;
        this.team1 = team1;
        this.team2 = team2;
    }

    public get $team1(): Team {
        return this.team1;
    }

    public get $team2(): Team {
    return this.team2;
    }

    public get $positions(): Map<string, Position> {
        return this.positions;
    }
}

export class Team {
    private id: number;
    private players: Array<Player>;

    constructor(id: number, players: Array<Player>) {
        this.id = id;
        this.players = players;
    }

    public getPlayer(positionKey: string): Player {
        const matchingPlayers = this.players.filter(x => x.$positionKey === positionKey);
        if (matchingPlayers.length > 0) {
            return matchingPlayers[0];
        }
        return undefined;
    }
}

export class Player {

    constructor(private name: string,
                private iconURL: string,
                private score: number,
                private positionKey: string,
                private nflTeamAbbrievation: string,
                private nflGameStatus: string,
                private ffGameStatus: string) {
    }

    public get $positionKey(): string {
        return this.positionKey;
    }
}

export enum PositionType {
    STARTING,
    BENCH
}

export class Position {
    private displayName: string;
    private type: PositionType;

    constructor(displayName: string, type: PositionType) {
        this.displayName = displayName;
        this.type = type;
    }
}
