namespace test {
  type Person = {
    name: string,
    age: number
  }

  type ReadOnlyPerson = Readonly<Person>

  type record = Record<'aaa'| 'bbb', Person>
}