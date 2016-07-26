function bigFirstLetter(str) {
    // debugger;
    var arr = str.split(" ");
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].substring(1));

    }
    return newArr.join(" ");

}

console.log(bigFirstLetter("the quick brown fox"))

