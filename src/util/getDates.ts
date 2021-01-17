export function getDates(number: number): Date[] {
  const days = Array.from(Array(number).keys());
  return days.map((i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d;
  });
}

export const getDateString = (date: Date): string =>
  date.toISOString().substring(0, 10);
