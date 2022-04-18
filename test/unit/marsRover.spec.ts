import {Grid, MarsRover} from "../../src/domain/marsRover/model";

describe("Mars Rover", () => {
    describe("When issuing a Move command", () => {
        it("moves forward", () => {
            const command = "M"
            const marsRover = new MarsRover(new Grid());

            marsRover.move(command)

            expect(marsRover.getPosition()).toStrictEqual({
                coordinates: {
                    horizontalAxis: 0,
                    verticalAxis: 1,
                },
                direction: "NORTH"
            })
        })
    });
})