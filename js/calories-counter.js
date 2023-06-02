'use strict';

const ActivityIndexes = {
  min: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  max: 1.9
};

const calculateCalories = (gender, age, height, weight, activityLevel) => {
  const calories = {};

  const unigenderValue = (10 * weight) + (6.25 * height) - (5 * age);
  const activityIndex = ActivityIndexes[activityLevel];

  calories.norm = Math.round(gender === "male" ? (unigenderValue + 5) * activityIndex : (unigenderValue - 161) * activityIndex);
  calories.minimal = Math.round(calories.norm * 0.85);
  calories.maximal = Math.round(calories.norm * 1.15);

  return calories;
};

export { calculateCalories }
