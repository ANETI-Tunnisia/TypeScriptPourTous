class person{
  speak() { console.log("je parle"); }
  walk() { console.log("je marche"); }
}
class Alien{
  telepathy() { console.log("je communique sans parler"); }
}
interface Roger extends person, Alien{ }

const test: Roger={
  speak(): void {},
  walk(): void {},
  telepathy(): void {}
}