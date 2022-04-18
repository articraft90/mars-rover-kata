import {Grid, MarsRover} from "../../src/domain/marsRover/model";

describe("Mars Rover", () => {
    it("moves forward", () => {
        const command = "M"
        const grid = new Grid();
        const marsRover = new MarsRover(grid);

        marsRover.move(command)

        expect(marsRover.getPosition()).toStrictEqual({
            coordinates: {
                horizontalAxis: 0,
                verticalAxis: 1,
            },
            direction: "NORTH"
        })
    })

    it("moves forward twice", () => {
        const command = "MM"
        const grid = new Grid();
        const marsRover = new MarsRover(grid);

        marsRover.move(command)

        expect(marsRover.getPosition()).toStrictEqual({
            coordinates: {
                horizontalAxis: 0,
                verticalAxis: 2,
            },
            direction: "NORTH"
        })
    })

    it("rotates right", () => {
        const command = "R"
        const marsRover = new MarsRover(new Grid());

        marsRover.move(command)

        expect(marsRover.getPosition()).toStrictEqual({
            coordinates: {
                horizontalAxis: 0,
                verticalAxis: 0,
            },
            direction: "EAST"
        })
    })

    it("rotates left", () => {
        const command = "L"
        const marsRover = new MarsRover(new Grid());

        marsRover.move(command)

        expect(marsRover.getPosition()).toStrictEqual({
            coordinates: {
                horizontalAxis: 0,
                verticalAxis: 0,
            },
            direction: "WEST"
        })
    })

    it("rotates multiple times", () => {
        const command = "LL"
        const marsRover = new MarsRover(new Grid());

        marsRover.move(command)

        expect(marsRover.getPosition()).toStrictEqual({
            coordinates: {
                horizontalAxis: 0,
                verticalAxis: 0,
            },
            direction: "SOUTH"
        })
    })
})