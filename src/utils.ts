export function formatDateToLongString(date: string | Date): string {
  const d = new Date(date)

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(d)
}


export function getSpanClass(index: number): "1x1" | "1x2" | "2x1" | "2x2" {
  const patterns: ("1x1" | "1x2" | "2x1" | "2x2")[] = ["1x1", "1x2", "2x1", "2x2"];
  return patterns[index % patterns.length];
}