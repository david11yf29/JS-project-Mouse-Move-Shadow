(function () {
    var err = 5;
    var boo = 1;
    try {
      throw new Error('some example');
    } catch (err) {
      var err = 3;
      var boo = 10;
      console.log(err); // 3
      console.log(boo); // 10
    }

    //Guess what the output is here:
    console.log(err); // 5
    console.log(boo); // 10
  })();