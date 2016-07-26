function findTheLongerWord(str) {
    var arr = str.split(" ");
    var len = 0;
    var rezult;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i].length > len) {
            rezult = arr[i];
            len = arr[i].length;
        }
    }
    return rezult;

}

console.log(findTheLongerWord("Web Development Tutorial"));