function Person() {
    console.log(this);
}

let john = new Person;
console.log(john);