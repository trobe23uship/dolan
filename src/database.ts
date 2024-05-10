import { AxeThrow } from './types';

export const getThrowsFromDatabase = async (): Promise<AxeThrow[]> => {
    const randomCoordinate = () => Math.floor(Math.random() * 11) - 5;
    const randomBool = () => Math.random() < 0.5;  

    return Promise.resolve(Array.from({ length: 20 }, () => [{ x: randomCoordinate(), y: randomCoordinate() }, randomBool()]));
}