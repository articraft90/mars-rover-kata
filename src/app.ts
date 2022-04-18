import {MarsRover} from "~/domain/marsRover/model";
import {UserInterface} from "~/adapters/userInterface";

export class MarsRoverApplication {
    private marsRover: MarsRover;
    private ui: UserInterface;

    constructor(marsRover: MarsRover, ui: UserInterface) {
        this.marsRover = marsRover;
        this.ui = ui;
    }

    moveMarsRover(command: string) {
        this.marsRover.move(command);

        this.ui.formatAndDisplay(this.marsRover.getPosition());
    }
}
