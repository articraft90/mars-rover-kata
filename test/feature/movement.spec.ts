import {Grid, MarsRover} from "~/domain/marsRover/model";
import {MarsRoverApplication} from "~/app";

describe("Given a Grid with no Obstacles", () => {
    describe("When commanding a Mars Rover to move", () => {
        it("moves", () => {
            const command = "MMRMMLM";
            const grid = new Grid();
            const marsRover = new MarsRover(grid);
            const ui = { formatAndDisplay: jest.fn()}
            const marsRoverApplication = new MarsRoverApplication(marsRover, ui);

            marsRoverApplication.moveMarsRover(command);

            expect(ui.formatAndDisplay).toHaveBeenCalledWith({
                coordinates: {
                    horizontalAxis: 2,
                    verticalAxis: 3
                },
                direction: "NORTH"
            })
        })
    });
})