function multiplyNumeric(obj) {
    var newImage = {};

    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    for (var key in obj) {
        if(isNumeric(obj[key])) {
            newImage[key] = 2 * obj[key];
        } else  {
            newImage[key] = obj[key];
        }
    }
    return newImage;
}

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

console.log(image);
console.log(multiplyNumeric(image));