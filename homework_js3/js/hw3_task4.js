var n = 100;

for (var i = 1; i <= n; i++) {
    if( i % 3 === 0 && i % 5 === 0) {
        console.log(i + " " + "FizzBuzz");
    } else if( i % 3 == 0) {
        console.log(i + " " + "Fizz");
    } else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log( i + " " + "Buzz");
    }
}