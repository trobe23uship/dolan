import { AxeThrow } from './types';

// map() example
const myNames = ['dolan', 'todd'];

// array property example
myNames.length // would evaluate to 2

// delegate function
const toUpperCase = (name: string) => name.toUpperCase();

// another way of writing the delegate function
const toUpperCase2 = (name: string) => {
    return name.toUpperCase();
}

const myUpperCaseNames = myNames.map((name) => toUpperCase(name)); // this value would evaluate to ['DOLAN', 'TODD']


export const getScoresByThrows = (throws: AxeThrow[]): number[] => {
    return [];
   //return throws.map(() => {});
}