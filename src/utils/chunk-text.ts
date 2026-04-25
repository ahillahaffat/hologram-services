export function chunkText(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g);

  if (sentences) return sentences;

  return text.split(", ");
}