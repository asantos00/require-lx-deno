export function linesToJSON(text: string, key = "lines") {
  const result = text.split("\n");

  return { [key]: result };
}
