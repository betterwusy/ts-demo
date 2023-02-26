type Person = {
  name: string,
  age: number
  text: string
}
type p1 = Partial<Person>

type keys = 'name' | 'text'
type p2 = Pick<Person, keys>
