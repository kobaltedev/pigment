export function hexWithAlpha(hex: string, alpha: number) {
  const hexAlpha = Math.round((alpha * 100 * 255) / 100)
    .toString(16)
    .toUpperCase();

  return `${hex}${hexAlpha}`;
}
