export function getDates(number: number): Date[] {
  const result = [];
  for (let i = 0; i < number; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    result.push(d);
  }
  return result;
}
