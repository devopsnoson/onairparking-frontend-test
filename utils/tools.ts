export function formatMonetary(val: number): string {
  return '$' + Math.round(val * 100.0) / 100.0;
}

export function cround(val: number, frac: number): number {
  const cfrag = Math.pow(10, frac);
  return Math.round(val * cfrag) / cfrag;
}

export function localReplaceAll(originalString, find, replace) {
  return originalString.replace(new RegExp(find, 'g'), replace);
}
