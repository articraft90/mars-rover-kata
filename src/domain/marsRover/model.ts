export class Grid {
}

enum Direction {
    NORTH = "NORTH",
    SOUTH = "SOUTH",
    EAST = "EAST",
    WEST = "WEST"
}

type Coordinates = {
    horizontalAxis: number
    verticalAxis: number
}

export type Position = {
    coordinates: Coordinates
    direction: Direction
}

const defaultDeployedPosition = {
    coordinates: {
        horizontalAxis: 0,
        verticalAxis: 0
    },
    direction: Direction.NORTH
}

export class MarsRover {
    private readonly grid: Grid;
    private readonly position: Position;

    constructor(grid: Grid, position: Position = defaultDeployedPosition) {
        this.grid = grid;
        this.position = position
    }

    move(commandChain: string) {
        for (const command of commandChain) {
            if (command === "M") {
                this.position.coordinates.verticalAxis = this.position.coordinates.verticalAxis + 1
            }
        }
    }

    getPosition(): Position {
        return this.position;
    }

    getGrid(): Grid {
        return this.grid;
    }
}
