class person{
  speak() { console.log("je parle"); }
  walk() { console.log("je marche"); }
}
class Alien{
  telepathy() { console.log("je communique sans parler"); }
}

type Class = new (...args: any[]) => any;

function PersonMixin<Base extends Class>(base: Base) {
  return class extends base{
    speak() { console.log("je parle"); }
    walk() { console.log("je marche"); }
  }
}

function AlienMixin<Base extends Class>(base: Base) {
  return class extends base{
  telepathy() { console.log(`je communique sans parler. j'ai ${this.age} ans`); }
  }
}

const Roger = PersonMixin(AlienMixin(class {
  age: number = 5000;
} ))

const roger = new Roger();
roger.speak();
roger.walk();
roger.telepathy();
console.log(`j'ai ${roger.age} ans`)
