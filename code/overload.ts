function add(x: number, y: number): number;
function add(x: number, y: string): string;
function add(x: string, y: number): string;
function add(x: string | number, y: string | number) {
  if (typeof x === 'string' || typeof y === 'string') {
    return x.toString() + y.toString();
  }
  return x + y;
}