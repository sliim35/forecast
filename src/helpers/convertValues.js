const PRESSURE_MODIFIER = 1.333;

export const convertPressureValue = (value) =>
  Math.round(value / PRESSURE_MODIFIER);
