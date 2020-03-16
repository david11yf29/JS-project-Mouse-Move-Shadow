let fn = function() {
    console.log(this);
}

fn();

let fn2 = () => {
    console.log(this);
}

fn2();