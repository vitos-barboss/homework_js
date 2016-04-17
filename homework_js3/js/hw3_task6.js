function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

var x = +prompt("Enter x","");
var n = +prompt("Enter n","");

var outcome = pow(x, n);

if(n < 0) {
    alert("Enter integer 'n'");
} else if (n === 0) {
    outcome = 1;
}

alert(outcome);
