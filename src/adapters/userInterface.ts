import {Position} from "src/domain/marsRover/model";

export interface UserInterface {
    formatAndDisplay: (position: Position) => void
}
