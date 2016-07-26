function uniqueClasses(arr) {
    var obj = {};
    for(var i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1;

        } else if(obj[arr[i]]){
            obj[arr[i]] += 1;
        }

    }

    return Object.keys(obj).sort(function (a, b) {
        return obj[b] - obj[a];
    });



}


var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
console.log(uniqueClasses(arr));