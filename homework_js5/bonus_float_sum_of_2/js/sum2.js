var num1 = prompt("Enter the first number", "");
var num2 = prompt("Enter the second number", "");

function sum2(num1, num2) {

    function precision (num1, num2) {
        var precisionNum1 = parseFloat(num1) - parseInt(num1) + "";
        var precisionNum2 = parseFloat(num2) - parseInt(num2) + "";

            precisionNum1 = precisionNum1.length - 2;
            precisionNum2 = precisionNum2.length - 2;

        if (precisionNum1 > precisionNum2) {
            return precisionNum1;
        } else {
            return precisionNum2;
        }
    }

    var precisionGlobal = precision(num1, num2);

        num1 = +num1 * Math.pow(10, precisionGlobal);
        num2 = +num2 * Math.pow(10, precisionGlobal);

    return (num1 + num2) / Math.pow(10, precisionGlobal);

}

alert(sum2(num1, num2));
console.log(sum2(num1, num2));



