function calculator() {
    var sumArrey = [];
    var rezult = 0;

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }
    do {
        var number = prompt("Enter number for sum", "");

        if (isNumeric(number)) {
            sumArrey.push(+number);
        }
        else if(!isNumeric(number)) {
            for(var key in sumArrey) {
                rezult +=  sumArrey[key];
            }
            console.log(sumArrey);
            return "The sum is " + rezult;
        }

    } while(true);
}

console.log(calculator());