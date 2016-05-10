var arr = ['HTML', 'JavaScript', 'CSS'];

function arrSorted(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
     newArr.sort(function(a, b) {
        return a > b;
    });
    return newArr
}

console.log( arrSorted(arr) ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)