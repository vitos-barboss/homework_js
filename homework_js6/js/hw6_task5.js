function isPal(str) {
    var newArr = str.toLowerCase().split("");
    for (var i = 0; i < newArr.length; i++) {

        if (newArr[i] === " ") {
            newArr.splice(i, 1);
        }
    }
    for (var j = 0; j < newArr.length/2; j++) {
        if (newArr[j] !== newArr[newArr.length - j -1]) {
            return false;
        }
    }
    return true;
}

console.log(isPal('Anna')); // true

console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
