function getMaxNumber(arr) {

    arr.sort(function (a, b) {
        if (a > b) return 1;
        else return -1;
    });
    return arr[arr.length - 1];
    
}

console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15
