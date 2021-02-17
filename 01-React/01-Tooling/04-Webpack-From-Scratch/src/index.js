some_name = "fat tony"

console.log(some_name)

alert("Antz")

const sayHello = () => {
  document.body.innerHTML = "Hello world";
};

sayHello();

class Greeter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    document.body.innerHTML = `Hello ${this.name}!`;
  }
}

const greeter = new Greeter("Boris");
greeter.sayHello();
