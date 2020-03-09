function Person(name) {
    console.log(this);
    this.name = name;
}

let john = new Person('John');
console.log(john);