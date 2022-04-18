import {UserInterface} from "~/adapters/userInterface";
import {Position} from "~/domain/marsRover/model";

export class InMemoryUserInterface implements UserInterface {
    formatAndDisplay(position: Position): void {
        position;

        throw new Error("Not implemented");
    }

    display(positionFormatted: string): void {
        positionFormatted;

        throw new Error("Not implemented");
    }
}