export default function getChargerImage(type: string, size = "small"): string {
  const base = "photos";
  const name = type.toLowerCase();
  return `/${base}/${size}_${name}.png`;
}
