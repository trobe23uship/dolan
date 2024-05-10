import { AxeThrow } from './types';

export const getThrowsFromDatabase = async (): Promise<AxeThrow[]> => {
    const randomCoordinate = () => Math.floor(Math.random() * 11) - 5;  // Generates a random integer from -5 to 5
    const randomBool = () => Math.random() < 0.5;  // Randomly returns true or false

    const randomThrows = Array.from({ length: 20 }, () => [{ x: randomCoordinate(), y: randomCoordinate() }, randomBool()]) as AxeThrow[];  // Generates 20 random throws

    return Promise.resolve([
        ...randomThrows,
        [
            { x: 5, y: 5 },
            false
        ],
    ]);
}