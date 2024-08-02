import { AxeThrow, Coordinates } from "./types";

export const calculateScoreByThrow = (axeThrow: AxeThrow): number => {
  let score = 0;

  const isStuck = axeThrow[1];

  if (isStuck) {
    score += 5;
  }

  const distance = calculateManhattanDistance(axeThrow[0]);

  score += 5 - Math.min(distance, 5);

  return score;
};

export const getScoresByThrows = (throws: AxeThrow[]): number[] => {
  const scores: number[] = [];

  for (let i = 0; i < throws.length; i++) {
    const score = calculateScoreByThrow(throws[i]);
    scores.push(score);
  }

  return scores;
};

export const calculateManhattanDistance = (coordinates: Coordinates) => {
  return Math.abs(coordinates.x) + Math.abs(coordinates.y);
};
