function unique(str) {
    var newObj = {};

    for (var i = 0; i < str.length; i++) {
        newObj[str[i]] = true;
    }
    return Object.keys(newObj);
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log( unique(strings) ); // кришна, харе, 8-()