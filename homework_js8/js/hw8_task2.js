function Calculator() {
    //debugger;
    var operations = {
        "+": function(a, b) {
            return a + b;
        },
        "-": function(a, b) {
            return a - b;
        }
    };

    this.calculate = function() {
        var str = prompt("Enter command","");
        var arr = str.split(" ");
        a = arr[0];
        char = arr[1];
        b = arr[2];

        if (isNaN(a) || isNaN(b) || !operations[char]) {
            return "not correct value";
        } else {
            return  operations[char](+a, +b);
        }
    }

    this.addMethod = function(char, func) {
        operations[char] = func;
    }

}

var calc = new Calculator();

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate();
console.log( result ); // 8
