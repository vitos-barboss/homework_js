function anClean(arr) {
    var newObj = {};
    var rezultArr = [];

    for (var i = 0; i < arr.length; i++) {
        var sort = arr[i].toLowerCase().split("").sort().join("");
        newObj[sort] = arr[i];
    }

    for (var key in newObj) {
        rezultArr.push(newObj[key]);
    }

    return rezultArr;

}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'