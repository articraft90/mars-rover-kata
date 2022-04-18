import {Position} from "src/domain/marsRover/model";

export interface UserInterface {
    display: (position: Position) => void
}
