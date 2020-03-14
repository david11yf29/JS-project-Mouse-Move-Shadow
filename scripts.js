let view;
function initialize() {
    let called = 0;
    return function() {
        if (called > 0) {
            return;
        } else {
            view = ":v :v :v"
            called++;
            console.log(view);
        }
    }
}

const startonce = initialize();
startonce();
startonce();