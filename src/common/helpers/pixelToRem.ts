export function pixelToRem(pixel: number): string {
  const remValue = pixel / 14
  return `${remValue}rem`
}
