function unique(str) {
    var findArr = [];

    for (var i = 0; i < str.length; i++) {
        if (findArr.indexOf(str[i]) < 0 ) {
            findArr.push(str[i]);
        }
    }

    return findArr;
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings) ); // кришна, харе, 8-()