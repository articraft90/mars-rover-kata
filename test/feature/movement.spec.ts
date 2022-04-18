import {Grid, MarsRover} from "src/domain/marsRover/model";
import {MarsRoverApplication} from "src/app";

describe("Given a Grid with no Obstacles", () => {
    describe("When commanding a Mars Rover to move", () => {
        it("moves", () => {
            const command = "MMRMMLM";
            const grid = new Grid();
            const marsRover = new MarsRover(grid);
            // NOTE
            const ui = {
                display: jest.fn(),
                print: jest.fn()
            }
            const marsRoverApplication = new MarsRoverApplication(marsRover, ui);

            marsRoverApplication.moveMarsRover(command);

            expect(ui.display).toHaveBeenCalledWith("2:3:N")
        })
    });
})