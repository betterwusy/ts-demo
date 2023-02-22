class Animal {
  public name;
  public constructor(name: string) {
    this.name = name;
  }
}
let a = new Animal('Jack');
console.log(a.name)
