import { getScoresByThrows, calculateScoreByThrow } from "./getScoresByThrows";
import { AxeThrow } from "./types";

describe('calculateScoreByThrow', () => {
    it('should return a number', () => {
      const score = calculateScoreByThrow([{ x: 0, y: 0}, true]);

      expect(typeof score).toBe('number');
    });

    it('a stuck bullseye should yield 10 points', () => {
        const score = calculateScoreByThrow([{ x: 0, y: 0}, true]);

        expect(score).toEqual(10);
    })

    it('returns 0 for an awful throw', () => {
        const score = calculateScoreByThrow([{x: 0, y: -5}, false]);

        expect(score).toEqual(0);
    })

});

describe('getScoresByThrows', () => {
    it('should return a value', () => {
      const scores = getScoresByThrows([]);
       
      expect(scores).toBeDefined();
    });

    it('should return a score for every throw', () => {
        const testThrows = Array(100).fill([{ x: 0, y: 0}, true]);

        const scores = getScoresByThrows(testThrows);

        expect(scores.length).toEqual(testThrows.length);
    })

    
}); 