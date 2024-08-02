import {
  getScoresByThrows,
  calculateScoreByThrow,
  calculateManhattanDistance,
} from "./getScoresByThrows";
import { AxeThrow } from "./types";

describe("calculateManhattanDistance", () => {
  it("calculates coordinates to the bottom right correctly", () => {
    const manhattanDistance = calculateManhattanDistance({ x: 5, y: -5 });

    expect(manhattanDistance).toBe(10);
  });
});

describe("calculateScoreByThrow", () => {
  it("should return a number", () => {
    const score = calculateScoreByThrow([{ x: 0, y: 0 }, true]);

    expect(typeof score).toBe("number");
  });

  it("a stuck bullseye should yield 10 points", () => {
    const score = calculateScoreByThrow([{ x: 0, y: 0 }, true]);

    expect(score).toEqual(10);
  });

  it("returns at least 5 if stuck", () => {
    const score = calculateScoreByThrow([{ x: 1000, y: -500 }, true]);
    console.log(score);

    expect(score >= 5).toEqual(true);
  });

  it("returns 0 for an awful throw", () => {
    const score = calculateScoreByThrow([{ x: 0, y: -5 }, false]);

    expect(score).toEqual(0);
  });

  it("returns 9 for a pretty good throw", () => {
    const score = calculateScoreByThrow([{ x: 0, y: -1 }, true]);

    expect(score).toEqual(9);
  });
});

describe("getScoresByThrows", () => {
  it("should return a value", () => {
    const scores = getScoresByThrows([]);

    expect(scores).toBeDefined();
  });

  it("should return a score for every throw", () => {
    const testThrows = Array(100).fill([{ x: 0, y: 0 }, true]);

    const scores = getScoresByThrows(testThrows);

    expect(scores.length).toEqual(testThrows.length);
  });
});
