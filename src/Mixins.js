"use strict";
class person {
    speak() { console.log("je parle"); }
    walk() { console.log("je marche"); }
}
class Alien {
    telepathy() { console.log("je communique sans parler"); }
}
function PersonMixin(base) {
    return class extends base {
        speak() { console.log("je parle"); }
        walk() { console.log("je marche"); }
    };
}
function AlienMixin(base) {
    return class extends base {
        telepathy() { console.log("je communique sans parler"); }
    };
}
const Roger = PersonMixin(AlienMixin(class {
}));
const roger = new Roger();
roger.speak();
roger.walk();
roger.telepathy();
