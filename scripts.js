let person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return `Hi + ${this.firstname}`;
    }
}

let john = Object.create(person);
console.log(john);