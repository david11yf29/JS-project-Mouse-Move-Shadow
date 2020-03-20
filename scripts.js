(function () {
    var err = 5;
    var boo = 1;
    try {
      throw new Error('some example');
    } catch (boo) {
      var err = 3;
      var boo = 10;
      console.log(boo); // 10
      console.log(err); // 3
      console.log(boo); // 10
    }
    //Guess what the output is here:
    console.log(err); // 3
    console.log(boo); // 1
  })();