export function calculateEstimate(areaSqm: number, ratePerSqm: number): number {
  if (!Number.isFinite(areaSqm) || !Number.isFinite(ratePerSqm)) return 0;

  return Math.round(Math.max(0, areaSqm) * Math.max(0, ratePerSqm));
}

export function clampArea(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;

  return Math.min(max, Math.max(min, value));
}
