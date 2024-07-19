import { AxeThrow } from './types';


export const calculateScoreByThrow = (axeThrow: AxeThrow): number => {
    
    
    return 0;
} 

export const getScoresByThrows = (throws: AxeThrow[]): number[] => {
    const scores: number[] = [];

    for (let i = 0; i < throws.length; i++) {
        const score = calculateScoreByThrow(throws[i]);
        scores.push(score);
    }

    return scores;
} 