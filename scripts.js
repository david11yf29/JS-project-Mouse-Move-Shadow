function sayMyName() {
    return function findName() {
        return function printName() {
            return 'David';
        }
    }
};

console.log(sayMyName()()());