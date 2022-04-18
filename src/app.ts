import {MarsRover} from "src/domain/marsRover/model";
import {UserInterface} from "src/adapters/userInterface";

export class MarsRoverApplication {
    private marsRover: MarsRover;
    private ui: UserInterface;

    constructor(marsRover: MarsRover, ui: UserInterface) {
        this.marsRover = marsRover;
        this.ui = ui;
    }

    moveMarsRover(command: string) {
        this.marsRover.move(command);

        this.ui.display(this.marsRover.position());
    }
}
