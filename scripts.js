const multiply = (a, b) => a*b;
const curriedMutiply = (a) => (b) => (c) => a*b*c;
console.log(curriedMutiply(3)(4)(10));