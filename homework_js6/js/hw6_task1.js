function removeClass(obj, cls) {

    var arr = obj.className.split(" ");
    var newObj = {};

    if (arr.indexOf(cls)) {
        pos = arr.indexOf(cls);

        while ( arr.indexOf(cls, pos) != -1 ) {

            arr.splice(pos, 1);
            pos = arr.indexOf(cls,pos);

        }
        newObj.className = arr.join(" ");
        return newObj;
    }
    return obj

}

var obj = {
    className: 'menu open open block open'
};

console.log(removeClass(obj, 'open'));
console.log(removeClass(obj, 'blabla'));