import { getScoresByThrows } from "./getScoresByThrows";
import { AxeThrow } from "./types";

describe('getScoresByThrows', () => {
    it('should return a value', () => {
      const scores = getScoresByThrows([]);
       
      expect(scores).toBeDefined();
    });

    it('a stuck bullseye should yield 10 points', () => {
        const testThrows: AxeThrow[] = [
            [{ x: 0, y: 0}, true]
        ];

        const scores = getScoresByThrows(testThrows);

        expect(scores).toEqual([10]);
    })

    it('returns 0 for an awful throw', () => {
        const testThrows: AxeThrow[] = [
            [{x: 5, y: -5}, false]
        ];

        const scores = getScoresByThrows(testThrows);

        expect(scores).toEqual([0]);
    })
});