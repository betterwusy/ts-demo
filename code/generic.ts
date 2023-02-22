function createArray<T>(length: number, value: T): Array<T> {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
const arr: Array<string> = createArray<string>(5, 'x');
console.log(arr);

function swap<U, V>(tuple: [U, V]): [V, U] {
  return [tuple[1], tuple[0]]
}