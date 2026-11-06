function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
export function bell(n: number): bigint {
  integer(n, 0, 300);
  let row = [1n];
  for (let i = 1; i <= n; i++) {
    const next: bigint[] = [row[row.length - 1]!];
    for (let j = 1; j <= i; j++) next.push(next[j - 1]! + row[j - 1]!);
    row = next;
  }
  return row[0]!;
}
